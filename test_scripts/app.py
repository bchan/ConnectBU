from flask import Flask, jsonify, request, make_response
from flask_cors import CORS
import redis
import jwt

app = Flask(__name__)
CORS(app)

TEMP_SECRET = 'supersecretkey'

r = redis.Redis(host='connectbu-redis.g3bzla.0001.use1.cache.amazonaws.com', port=6379, db=0)


def checkJWT(encodedToken):
    if encodedToken is None:
        return None

    try:
        token = jwt.decode(encodedToken, TEMP_SECRET, algorithms=['HS256'])
    except jwt.ExpiredSignatureError:
        return None
    except:
        return None

    return token


@app.route('/expireToken', methods=['POST'])
def expireToken():
    data = request.json
    if data is None:
        return 'No data', 400
    if 'token' not in data:
        return 'No token found', 400

    token = data['token']
    decodedToken = checkJWT(token)
    if decodedToken is None:
        return 'Bad token', 400

    expirationTime = round(decodedToken['exp'] - datetime.utcnow().timestamp())
    result = r.setex(token, expirationTime, decodedToken['exp'])

    if result != True:
        return 'Error', 500

    return 'Success', 200


@app.route('/checkToken', methods=['POST'])
def checkToken():
    data = request.json
    if data is None:
        return 'No data', 400
    if 'token' not in data:
        return 'No token found', 400

    token = data['token']

    if r.exists(token) == 1:
        return 'Exists', 200
    else:
        return 'Does not exist', 200


if __name__ == '__main__':
    app.run()
