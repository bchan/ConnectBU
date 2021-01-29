from flask import Flask, jsonify, request
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from models import db, Student, Class, Club, Lab, CampusJob, TakesClass, TakesJob, JoinsClub, JoinsLab
import jwt
from google.oauth2 import id_token
from google.auth.transport import requests
from datetime import datetime, timedelta
from functools import wraps

app = Flask(__name__)
CORS(app)
api = Api(app)
app.config.from_pyfile('config.py')
db.init_app(app)



TEMP_SECRET = 'supersecretkey'


##### Helper functions for Authentication #####

# Checks Google SSO token from the frontend
def checkGoogleToken(token):
    try:
        idInfo = id_token.verify_oauth2_token(token, requests.Request(), CLIENT_ID)
        return idInfo
    except ValueError:
        # Invalid Token
        return None


# Creates JWT for the frontend
def createToken(tokenDict):
    return jwt.encode(tokenDict, TEMP_SECRET, algorithm='HS256')


# Decorator for JWTs
def jwt_required(func):
    @wraps(func)
    def checkJWT(*args, **kwargs):
        encodedToken = request.cookies.get('token')
        if encodedToken is None:
            return 'Not authorized', 401

        try:
            token = jwt.decode(encodedToken, TEMP_SECRET, algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            return 'Expired token', 401
        except:
            return 'Invalid token', 401

        print(token)
        # TODO: Do checks for blacklist

        return func(*args, **kwargs)
    
    return checkJWT


class GetProfile(Resource):
    def get(self, email):
        user = Student.query.filter_by(email=email).first()

        if (user is None):
            return {'error': 'User could not be found.'}, 404
        else:
            user_info = {
                'email': user.email,
                'first_name': user.first_name,
                'last_name': user.last_name,
                'major1': user.major1,
                'major2': user.major2,
                'minor': user.minor,
                'year': user.school_year,
                'has_ipad': user.has_ipad
            }
            return user_info, 200

class NewUser(Resource):
    def post(self):

        json_data = request.get_json(force=True)
        print(json_data)

        new_student = Student(
            email = json_data['email'],
            first_name = json_data['first_name'],
            last_name =json_data['last_name'],
            major1 = json_data['major'][0],
            major2 = json_data['major'][1] if len(json_data['major']) > 1 else None,
            minor = json_data['minor'],
            school_year = json_data['school_year'],
            has_ipad = json_data['has_ipad']
        )

        db.session.add(new_student)
        db.session.commit()

        """
        listclasses = json_data['class_options']
        listresearch = json_data['research']
        listclubs = json_data['club']

        for i in listclasses:
            new_takes_class = TakesClass(email = json_data['email'], class_name = i)
            db.session.add(new_takes_class)

        for i in listresearch:
            new_joins_lab = JoinsLab(email = json_data['email'],  lab_name = i)
            db.session.add(new_joins_lab)

        for i in listclubs:
            new_joins_club = JoinsClub(email = json_data['email'],  club_name = i)
            db.session.add(new_joins_club)

        db.session.commit()

        """

        res = Student.query.filter_by(email=json_data['email']).first()

        if(res is not None):
            return {'response': 'User data inserted successfully'}, 200
        else:
            return {'error': 'Error creating user.'}, 404


# API Routes
api.add_resource(GetProfile, '/profile/<string:email>')
api.add_resource(NewUser, '/create_user')

if __name__ == '__main__':
    app.run(debug=True)
