from flask import Flask, jsonify, request, make_response
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from models import db, Student, Class, Major, Minor, Club, Lab, Interest, TakesClass, JoinsClub, JoinsLab, HasInterest
from requests_aws4auth import AWS4Auth
import boto3
from elasticsearch import Elasticsearch, RequestsHttpConnection
from requests_aws4auth import AWS4Auth


app = Flask(__name__)
CORS(app)
api = Api(app)
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



#sample profiles for elasticsearch
# doc1 = {
#     "name": 'Damani Philip',
#     "majors": 'ENG Computer Engineering',
#     "minors": 'CAS Astronomy',
#     "year": '2021',
#     "ipad?": 'no'
#     }

# doc2 = {
#     "name": 'Nadim El Helou',
#     "majors": ['ENG Computer Engineering', "CAS Pyschology"],
#     "minors": 'CAS Ancient Greek',
#     "year": '2021',
#     "ipad?": 'no'
#     }

# res = es.index(index="profiles", id=1, body=doc1)
# res2 = es.index(index="profiles", id=2, body=doc2)
# print('\ndocument ingested...BUUUUUURP\n')

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
        if not searchFields:
            for key in json_data["searchFields"]:
                searchFields.append(str(key))

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
    def put(self, email):
        user = request.get_json(force=True)

        if user['hasIpad']:
            ipd = 'yes'
        else:
            ipd = 'no'
            user_info = {
                'email': user.email,
                'first_name': user.first_name,
                'last_name': user.last_name,
                'major1': user.major1,
                'major2': user.major2,
                'minor': user.minor,
                'year': user.school_year,
                'has_ipad': user.has_ipad,
                'club': [club.club_name for club in clubs],
                'research': [lab.lab_name for lab in labs],
                'interests': [interest.interest_name for interest in interests]
            }
        #in reality, convert id string from DB into UUID 
        res = es.index(index="profiles", id=json_data['index'], body=doc1)
        
        return 'User data updated successfully', 200


api.add_resource(Search, '/search')

if __name__ == '__main__':
    app.run(debug=True)
