from flask import Flask
import mysql.connector
from flask_cors import CORS
import json
import numpy as np

app = Flask(__name__)
CORS(app)

@app.route('/')
def getNames():
    
    mydb = mysql.connector.connect(
        host="HOSTNAME",
        user="USERNAME",
        password="PASSWORD",
        database="connectbudb"
    )
    cursor = mydb.cursor()

    query = ("SELECT * FROM student")

    cursor.execute(query)
    names = []

    for id, firstName, lastName, major, minor, schoolYear, _ in cursor:
        # print("ID: %d Name: %s %s Major: %s Minor: %s Year: %d" % (id, firstName, lastName, major, minor, schoolYear))
        names.append(firstName)

    cursor.close()
    mydb.close()
    
    # return 'World, I Bid Thee Adieu and Wish Upon Thou Good Fortune Forever and After.'
    return json.dumps(names)


@app.route('/add')
def addName():
    mydb = mysql.connector.connect(
        host="hostname",
        user="user",
        password="password",
        database="connectbudb"
    )
    cursor = mydb.cursor()

    query = ("INSERT INTO student VALUES (rnd.randint(1000), 'Connect', 'BU', 'EE', 'CE', 2021, 1);id, first_name, last_name, major, minor, year, has_ipad)")

    cursor.execute(query)
    oustr = []

    for id, firstName, lastName, major, minor, schoolYear, _ in cursor:
        # print("ID: %d Name: %s %s Major: %s Minor: %s Year: %d" % (id, firstName, lastName, major, minor, schoolYear))
        ourstr = [id, firstName, lastName, major, minor, schoolYear]
    cursor.close()å
    mydb.close()
