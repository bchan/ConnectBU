from flask_sqlalchemy import SQLAlchemy
from config import SQLALCHEMY_DATABASE_URI

db = SQLAlchemy()
engine = db.create_engine(SQLALCHEMY_DATABASE_URI, {})
db.metadata.reflect(engine)

class Student(db.Model):
    __table__ = db.Model.metadata.tables['student']

class Class(db.Model):
    __table__ = db.Model.metadata.tables['class']

class Club(db.Model):
    __table__ = db.Model.metadata.tables['club']

class Lab(db.Model):
    __table__ = db.Model.metadata.tables['lab']

class Interest(db.Model):
    __table__ = db.Model.metadata.tables['interest']

class TakesClass(db.Model):
    __table__ = db.Model.metadata.tables['takes_class']

class HasInterest(db.Model):
    __table__ = db.Model.metadata.tables['has_interest']

class JoinsClub(db.Model):
    __table__ = db.Model.metadata.tables['joins_club']

class JoinsLab(db.Model):
    __table__ = db.Model.metadata.tables['joins_lab']
