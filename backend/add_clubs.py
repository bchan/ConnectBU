from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from config import SQLALCHEMY_DATABASE_URI
from models import db, Club

engine = db.create_engine(SQLALCHEMY_DATABASE_URI, {})
session = Session(engine)

filename = 'clubs.txt'
list_dir = 'lists/'
filepath = list_dir + filename

def add_clubs():
    with open(filepath, 'r') as file:
        for line in file:
            if line == "\n":
                continue
            new_club = Club(club_name=line.strip('\n'))
            session.add(new_club)
    session.commit()

if __name__ == '__main__':
    add_clubs()
