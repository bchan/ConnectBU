from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from config import SQLALCHEMY_DATABASE_URI
from models import db, Class
import json

engine = db.create_engine(SQLALCHEMY_DATABASE_URI, {})
session = Session(engine)

filename = 'courses.json'
list_dir = 'lists/'
filepath = list_dir + filename

def add_classes():
    with open(filepath, 'r') as read_file:
        data = json.load(read_file)

    for elem in data:
        class_code = elem['code'].replace(' ', '')
        if (elem['credits'] != 'Var' and '.' not in elem['credits']):
            class_credits = int(elem['credits'])
            new_class = Class(class_name = class_code, credits = class_credits)
        else:
            new_class = Class(class_name = class_code)
        session.add(new_class)
    session.commit()


if __name__ == '__main__':
    add_classes()
