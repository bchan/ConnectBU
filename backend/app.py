from flask import Flask, jsonify
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy
from models import db, Student, Class, Club, Lab, CampusJob, TakesClass, TakesJob, JoinsClub, JoinsLab

app = Flask(__name__)
api = Api(app)
app.config.from_pyfile('config.py')
db.init_app(app)

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

# API Routes
api.add_resource(GetProfile, '/profile/<string:email>')

if __name__ == '__main__':
    app.run(debug=True)
