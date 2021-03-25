from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from config import SQLALCHEMY_DATABASE_URI
from models import db, Major

engine = db.create_engine(SQLALCHEMY_DATABASE_URI, {})
session = Session(engine)

def add_majors():
    with open('majors.txt', 'r') as file:
        for line in file:
            if line == "\n":
                continue
            new_major = Major(major_name=line.strip('\n'))
            session.add(new_major)
    session.commit()

if __name__ == '__main__':
    add_majors()
