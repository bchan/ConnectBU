from flask import Flask
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy
from models import db, Student, Class, Club, Lab, CampusJob, TakesClass, TakesJob, JoinsClub, JoinsLab

app = Flask(__name__)
api = Api(app)
app.config.from_pyfile('config.py')
db.init_app(app)


class GetUser(Resource):
    def get(self, user):
        res = Student.query.filter_by(first_name=user).first()
        return {'first_name': res.first_name}

# API Routes
api.add_resource(GetUser, '/<string:user>')

if __name__ == '__main__':
    app.run(debug=True)
