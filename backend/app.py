from flask import Flask, jsonify, request, make_response
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from models import db, Student, Class, Major, Minor, Club, Lab, Interest, TakesClass, JoinsClub, JoinsLab, HasInterest
import jwt
from google.oauth2 import id_token
from google.auth.transport import requests
from datetime import datetime, timedelta
from functools import wraps
import requests as r
import uuid

app = Flask(__name__)
CORS(app)
api = Api(app)
app.config.from_pyfile('config.py')
db.init_app(app)


##### Helper functions for Authentication #####

# Checks Google SSO token from the frontend
def checkGoogleToken(token):
    try:
        idInfo = id_token.verify_oauth2_token(token, requests.Request(), app.config['GOOGLE_CLIENT_ID'])
        return idInfo
    except ValueError:
        # Invalid Token
        return None


# Creates JWT for the frontend
def createToken(tokenDict):
    return jwt.encode(tokenDict, app.config['JWT_SECRET_KEY'], algorithm='HS256')


# Checks if JWT is blacklisted
def checkToken(token):
    url = 'http://ec2-3-95-148-186.compute-1.amazonaws.com:5000/checkToken'
    res = r.post(url, json={'token': token})

    if res.status_code == 200 and res.text == 'Exists':
        return True
    else:
        return False


# Expires JWT
def expireToken(token):
    url = 'http://ec2-3-95-148-186.compute-1.amazonaws.com:5000/expireToken'
    res = r.post(url, json={'token': token})

    if res.status_code == 200 and res.text == 'Success':
        return True
    else:
        return False


# Decorator for JWTs
def jwt_required(func):
    @wraps(func)
    def checkJWT(*args, **kwargs):
        encodedToken = request.cookies.get('token')
        if encodedToken is None:
            return 'Not authorized', 401

        try:
            token = jwt.decode(encodedToken, app.config['JWT_SECRET_KEY'], algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            return 'Expired token', 401
        except:
            return 'Invalid token', 401

        if checkToken(encodedToken):
            return 'Logged out', 401

        return func(*args, **kwargs)

    return checkJWT


##### Endpoints #####

class User(Resource):
    # retrieve a user's profile info
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

    # create a new user
    def post(self, email):

        json_data = request.get_json(force=True)
        print(json_data)

        new_student = Student(
            email = email,
            unique_id = str(uuid.uuid4()),
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

    # Updates an existing user
    @jwt_required
    def put(self, email):
        json_data = request.get_json(force=True)
        oldData = json_data['oldData']
        newData = json_data['newData']
        encodedToken = request.cookies.get('token')
        token = jwt.decode(encodedToken, app.config['JWT_SECRET_KEY'], algorithms=['HS256'])

        if email != token['email']:
            return 'Cannot update other user\'s profile', 401

        clubsRemove = filter(lambda x: x not in newData['club'], oldData['club'])
        clubsAdd = filter(lambda x: x not in oldData['club'], newData['club'])

        labsRemove = filter(lambda x: x not in newData['research'], oldData['research'])
        labsAdd = filter(lambda x: x not in oldData['research'], newData['research'])

        interestRemove = filter(lambda x: x not in newData['interests'], oldData['interests'])
        interestAdd = filter(lambda x: x not in oldData['interests'], newData['interests'])

        # Updating user tuple in database
        try:
            s = Student.query.filter_by(email=email).first()
            s.first_name = newData['firstName']
            s.last_name = newData['lastName']
            s.major1 = newData['major1']
            s.major2 = newData['major2'] if newData['major2'] != '' else None
            s.minor = newData['minor'] if newData['minor'] != '' else None
            s.school_year = newData['schoolYear']
            s.has_ipad = newData['hasIpad']

            if len(clubsRemove) != 0:
                JoinsClub.query.filter_by(email=email).filter(JoinsClub.club_name.in_(clubsRemove)).delete()
            
            if len(clubsAdd) != 0:
                db.session.add_all([JoinsClub(email=email, club_name=club) for club in clubsAdd])

            db.session.commit()
        except:
            return 'Unable to complete update', 503

        return 'User data updated successfully', 200


class Course(Resource):
    def get(self):
        class_query = Class.query.all()
        class_list = []

        if (class_query == []): # TODO: possibly define a more robust error check
            return {'error': 'Classes could not be retrieved'}, 404
        else:
            for elem in class_query:
                class_list.append(elem.class_name)
            return {'class_list': class_list}, 200

class ProfileOptions(Resource):
    def get(self):
        class_query = Class.query.all()
        major_query = Major.query.all()
        minor_query = Minor.query.all()
        club_query = Club.query.all()
        lab_query = Lab.query.all()
        interest_query = Interest.query.all()

        return {
            'major_list': [elem.major_name for elem in major_query],
            'minor_list': [elem.minor_name for elem in minor_query],
            'club_list': [elem.club_name for elem in club_query],
            'lab_list': [elem.lab_name for elem in lab_query],
            'interest_list': [elem.interest_name for elem in interest_query]
        }


class Login(Resource):
    def post(self):
        data = request.get_json(force=True)

        # Check if data exists
        if data is None:
            return 'No data', 400

        # Checks if token exists in request
        if not 'tokenId' in data:
            return 'Could not find token', 400

        # Takes token and checks with Google API
        token = data['tokenId']
        googleInfo = checkGoogleToken(token)

        if googleInfo is None:
            return 'Invalid token', 401

        if 'hd' not in googleInfo or googleInfo['hd'] != 'bu.edu':
            return 'Invalid email', 401


        email = googleInfo['email']
        firstName = googleInfo['given_name']
        lastName = googleInfo['family_name']

        # Checks if user is in database
        res = Student.query.filter_by(email=email).first()

        # Adds user if not in database
        if res is None:
            new_student = Student(
                email = email,
                first_name = firstName,
                last_name = lastName,
                major1 = '',
                major2 = None,
                minor = None,
                school_year = 0,
                has_ipad = 0
            )
            db.session.add(new_student)
            db.session.commit()

            resp = Student.query.filter_by(email=email).first()

            if resp is None:
                return 'Error creating user profile', 501

        # Issues JWT
        td = timedelta(hours=12, seconds=0)
        expirationDate = datetime.utcnow() + td # 12 hours

        jwtToken = createToken({'email': googleInfo['email'], 'exp': expirationDate})
        res = make_response()
        res.set_cookie('token', value=jwtToken, httponly=True, expires=expirationDate)

        return res

    @jwt_required
    def get(self):
        encodedToken = request.cookies.get('token')
        token = jwt.decode(encodedToken, app.config['JWT_SECRET_KEY'], algorithms=['HS256'])
        return token['email'], 200


class Logout(Resource):
    def get(self):
        res = make_response()
        res.set_cookie('token', value='', httponly=True, expires=0)

        # TODO: Blacklist jwt if exists
        # Will need to use AWS ElastiCache -- Redis SETEX for the key and then check everytime in the declarer
        encodedToken = request.cookies.get('token')
        expireToken(encodedToken)

        return res


# API Routes
api.add_resource(User, '/user/<string:email>')
api.add_resource(Course, '/courses')
api.add_resource(ProfileOptions, '/profileoptions')
api.add_resource(Login, '/api/login')
api.add_resource(Logout, '/api/logout')

if __name__ == '__main__':
    app.run(debug=True)
