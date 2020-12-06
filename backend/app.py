from flask import Flask, jsonify, request
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

class NewUser(Resource):
    def post(self):

        json_data = request.get_json(force=True)

        Student.insert().value(email = json_data['email'], 
                                firstname = json_data['firstName'], lastName =json_data['lastname'],
                                country = json_data['country'], major1 = json_data['major1'], 
                                major2 = json_data['major2'], mminor = json_data['minor'])

    new_student = Student(email = json_data['email'], 
                                firstname = json_data['firstName'], lastName =json_data['lastname'],
                                country = json_data['country'], major1 = json_data['major1'], 
                                major2 = json_data['major2'], mminor = json_data['minor'])

    db.session.add(new_student)


        # research = json_data['research'],
        #                         class_options = json_data['class_options'], club = json_data['club']

        listclasses = json_data['class_options']
        listresearch = json_data['research']
        listclubs = json_data['club']

        for i in listclasses:
             TakesClass.insert().value(Student = email, class = i)

        for i in listresearch:
             JoinsLab.insert().value(Student = email,  lab = i)

        for i in listclubs:
            JoinsClub.insert().value(Student = email,  club = i)


        res = Student.query.filter_by(first_name=frst).first()

        if(res.size != 0)
            return 'user data inserted successfully'
        else
            return 'go fuck yourself'

        


# API Routes
api.add_resource(GetUser, '/<string:user>')
api.add_resource(NewUser, '/users')

if __name__ == '__main__':
    app.run(debug=True)
