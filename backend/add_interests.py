from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from config import SQLALCHEMY_DATABASE_URI
from models import db, Interest

engine = db.create_engine(SQLALCHEMY_DATABASE_URI, {})
session = Session(engine)

filename = 'interests.txt'
list_dir = 'lists/'
filepath = list_dir + filename

def add_interests():
    with open(filepath, 'r') as file:
        for line in file:
            if line == "":
                continue
            formatted_interest = line.strip('\n').title()
            new_interest = Interest(interest_name=formatted_interest)
            session.add(new_interest)
    session.commit()

if __name__ == '__main__':
    add_interests()
