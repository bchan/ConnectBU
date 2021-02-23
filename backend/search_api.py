from flask import Flask, jsonify, request, make_response
from flask_restful import Resource, Api
from requests_aws4auth import AWS4Auth
import boto3

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

class Search(Resource):
    def post(self):
        json_data = request.get_json(force=True)
        print(json_data)

        

api.add_resource(Search, '/search')

if __name__ == '__main__':
    app.run(debug=True)
