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
        print(json_data)

        new_student = Student(
            email = json_data['email'],
            first_name = json_data['first_name'],
            last_name =json_data['last_name'],
            major1 = json_data['major'][0],
            major2 = json_data['major'][1] if len(json_data['major']) > 1 else null,
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
api.add_resource(GetUser, '/<string:user>')
api.add_resource(NewUser, '/create_user')

if __name__ == '__main__':
    app.run(debug=True)
