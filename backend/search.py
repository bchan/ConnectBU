from elasticsearch import Elasticsearch, RequestsHttpConnection
from requests_aws4auth import AWS4Auth
import boto3

host = 'search-yokesearch-piqsgtzhu2fnekcw4jpegeuobe.us-east-1.es.amazonaws.com' # For example, my-test-domain.us-east-1.es.amazonaws.com
region = 'us-east-1' # e.g. us-west-1
service = 'es'
credentials = boto3.Session().get_credentials()

awsauth = AWS4Auth(credentials.access_key, credentials.secret_key, 
                   region, service, session_token=credentials.token) 
#get session token from cli

es = Elasticsearch(
    hosts = [{'host': host, 'port': 443}],
    http_auth = awsauth,
    use_ssl = True,
    verify_certs = True,
    connection_class = RequestsHttpConnection
)

print('ES is active')

document = {
            "email" : "ybaker@bu.edu",
            "first_name" : "yousuf",
            "last_name" : "baker",
            "major1" : "EE",
            "school_year" : "2021",
            "has_ipad" : "Yes"
}

es.index(index="stud_profiles", doc_type="_doc", id="1", body=document)
print('\ndocument ingested...BUUUUUURP\n')

print(es.get(index="stud_profiles", doc_type="_doc", id="1"))