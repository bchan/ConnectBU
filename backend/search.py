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


doc1 = {
    "name": 'baker, yousuf', 
    "majors": 'electrical engineering', 
    "minors": 'bag_getting', 
    "year": '2021', 
    "ipad?": 'yes'
    }

doc2 = {
    "name": 'philip, damani', 
    "majors": 'computer', 
    "minors": 'female anatomy', 
    "year": '2021', 
    "ipad?": 'yes'
    }




res = es.index(index="profiles", id=1, body=doc1)
res2 = es.index(index="profiles", id=2, body=doc2)
print('\ndocument ingested...BUUUUUURP\n')

print(res['result'])

res = es.get(index="profiles", id=1)
print(res['_source'])

es.indices.refresh(index="profiles")

#searching through one field
# srch = {
#   "query": {
#     "bool": {
#       "must": {
#         "match": {
#           "majors": "electrical",
#         }
#       }
#     }
#   }
# }

#searching through multiple fields
srch = {
        "query": 
            {"multi_match": 
                {"query": "female", "fields": ["majors", "minors"]}
            }
        }

#search with key term and no specified field is multimatching w/ all fields


resl = es.search(body=srch)
readableresults = resl["hits"]["hits"]
print("Got %d Hits:" % resl['hits']['total']['value'])
print ("query hits:", resl["hits"]["hits"])
