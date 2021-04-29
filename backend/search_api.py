from flask import Flask, jsonify, request, make_response
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import Session
from flask_cors import CORS
from models import db, Student, Class, Major, Minor, Club, Lab, Interest, TakesClass, JoinsClub, JoinsLab, HasInterest
from requests_aws4auth import AWS4Auth
import boto3
from elasticsearch import Elasticsearch, RequestsHttpConnection
from requests_aws4auth import AWS4Auth
from config import SQLALCHEMY_DATABASE_URI


app = Flask(__name__)
CORS(app)
api = Api(app)
app.config.from_pyfile('config.py')
engine = db.create_engine(SQLALCHEMY_DATABASE_URI, {})
session = Session(engine)


host = 'search-yokesearch-piqsgtzhu2fnekcw4jpegeuobe.us-east-1.es.amazonaws.com' # For example, my-test-domain.us-east-1.es.amazonaws.com
region = 'us-east-1' # e.g. us-west-1
service = 'es'
credentials = boto3.Session().get_credentials()

#get session token from cli
awsauth = AWS4Auth(credentials.access_key, credentials.secret_key,
                   region, service, session_token=credentials.token)

#initializing elasticsearch instance
es = Elasticsearch(
        hosts = [{'host': host, 'port': 443}],
        http_auth = awsauth,
        use_ssl = True,
        verify_certs = True,
        connection_class = RequestsHttpConnection
    )
print('ES is active')

try:
    student_list = session.query(Student).all()
    for student in student_list:
        email = student.email
        clubs = session.query(JoinsClub).filter_by(email=email).all()
        labs = session.query(JoinsLab).filter_by(email=email).all()
        interests = session.query(HasInterest).filter_by(email=email).all()
        classes = session.query(TakesClass).filter_by(email=email).all()

        profile = {
            'email': email,
            'profile_pic': student.profile_pic_url,
            'name': student.first_name + " " + student.last_name,
            'majors': [student.major1, student.major2],
            'minors': student.minor,
            'year': student.school_year,
            'ipad': student.has_ipad,
            'clubs': [club.club_name for club in clubs],
            'research': [lab.lab_name for lab in labs],
            'interests': [interest.interest_name for interest in interests],
            'classes': [course.class_name for course in classes]
        }

        doc_exists = es.exists(index='profiles', id=student.unique_id)
        if (doc_exists):
            prof = es.get(index='profiles', id=student.unique_id)
            # print(prof)
            es.delete(index='profiles', id=student.unique_id)
            # res = es.update(index='profiles', id=student.unique_id, body=profile)
        res = es.index(index='profiles', id=student.unique_id, body=profile)

    print('Profiles ingested into ES')

except Exception as e:
    print('Exception occured: ', e)

class Search(Resource):
    #search request
    def post(self):

        json_data = request.get_json(force=True)
        print("REQUEST DATA\n",json_data)

        searchFields = []
        filters = json_data["searchFields"]
        for key in json_data["searchFields"]:
            if (filters[key]):
                searchFields.append(str(key))
        #if not searchFields:
         #   for key in json_data["searchFields"]:
          #      searchFields.append(str(key))

        search_query = {
                        "query":
                            {"multi_match":
                                {"query": json_data["searchTerm"], "fields": searchFields}
                            }
                        }
        print("SEARCH QUERY\n",search_query)
        resl = es.search(body=search_query)

        search_results =  {
            'results': resl["hits"]["hits"],
            'nohits': resl['hits']['total']['value']
        }

        return search_results, 200

    #update profile
    def put(self):
        try:
            user = request.get_json(force=True)
            print(user)
            unique_id = user['unique_id']
            user_info = {
                'email': user['email'],
                'name': user['first_name'] + " " + user['last_name'],
                'profile_pic': user['profile_pic_url'],
                'majors': [user['major1'], user['major2']],
                'minors': user['minor'],
                'year': user['school_year'],
                'clubs': [club for club in user['clubs']],
                'research': [lab for lab in user['labs']],
                'interests': [interest for interest in user['interests']],
                'classes': [class_name for class_name in user['classes']]
            }
        except Exception as e:
            print(e)
            return "Error retrieving request data", 400

        try:
            res = es.index(index="profiles", id=unique_id, body=user_info)
        except Exception as e:
            print(e)
            return "Error updating user data", 500

        return 'User data updated successfully', 200


api.add_resource(Search, '/search')

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=4000)
