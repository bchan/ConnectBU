from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from config import SQLALCHEMY_DATABASE_URI
from models import db, Lab

engine = db.create_engine(SQLALCHEMY_DATABASE_URI, {})
session = Session(engine)

filename = 'labs.txt'
list_dir = 'lists/'
filepath = list_dir + filename

def add_labs():
    with open(filepath, 'r') as file:
        for line in file:
            if line == "\n":
                continue
            new_club = Lab(lab_name=line.strip('\n'))
            session.add(new_club)
    session.commit()

if __name__ == '__main__':
    add_labs()
