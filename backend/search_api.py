from flask import Flask, jsonify, request, make_response
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from requests_aws4auth import AWS4Auth
import boto3
from elasticsearch import Elasticsearch, RequestsHttpConnection
from requests_aws4auth import AWS4Auth


app = Flask(__name__)
CORS(app)
api = Api(app)

host = 'search-yokesearch-piqsgtzhu2fnekcw4jpegeuobe.us-east-1.es.amazonaws.com' # For example, my-test-domain.us-east-1.es.amazonaws.com
region = 'us-east-1' # e.g. us-west-1
service = 'es'
credentials = boto3.Session().get_credentials()

#get session token from cli
awsauth = AWS4Auth(credentials.access_key, credentials.secret_key,
                   region, service, session_token=credentials.token)

es = Elasticsearch(
        hosts = [{'host': host, 'port': 443}],
        http_auth = awsauth,
        use_ssl = True,
        verify_certs = True,
        connection_class = RequestsHttpConnection
    )
print('ES is active')

doc1 = {
    "name": 'Damani Philip',
    "majors": 'ENG Computer Engineering',
    "minors": 'CAS Astronomy',
    "year": '2021',
    "ipad?": 'no'
    }

doc2 = {
    "name": 'Nadim El Helou',
    "majors": ['ENG Computer Engineering', "CAS Pyschology"],
    "minors": 'CAS Ancient Greek',
    "year": '2021',
    "ipad?": 'no'
    }




res = es.index(index="profiles", id=1, body=doc1)
res2 = es.index(index="profiles", id=2, body=doc2)
print('\ndocument ingested...BUUUUUURP\n')

class Search(Resource):
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


api.add_resource(Search, '/search')

if __name__ == '__main__':
    app.run(debug=True)
