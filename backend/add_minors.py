from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from config import SQLALCHEMY_DATABASE_URI
from models import db, Minor

engine = db.create_engine(SQLALCHEMY_DATABASE_URI, {})
session = Session(engine)

def add_minors():
    with open('minors.txt', 'r') as file:
        for line in file:
            new_minor = Minor(minor_name=line.strip('\n'))
            session.add(new_minor)

    session.commit()


if __name__ == '__main__':
    add_minors()
