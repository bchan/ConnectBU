from flask import Flask, request
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
        names.append(firstName)

    cursor.close()
    mydb.close()
    
    return json.dumps(names)


@app.route('/add')
def addName():
    mydb = mysql.connector.connect(
        host="HOSTNAME",
        user="USERNAME",
        password="PASSWORD",
        database="connectbudb"
    )
    cursor = mydb.cursor()

    name = request.args.get('name')
    if name is None:
        return 'Need name parameter'

    query = "INSERT INTO student (student_id, first_name, last_name, major, minor, school_year, has_ipad) VALUES (%s, %s, %s, %s, %s, %s, %s)"
    values = (str(np.random.randint(0, 100000)), name, 'LASTNAME', 'EE', 'CE', '2021', '1')

    cursor.execute(query, values)

    mydb.commit()

    cursor.close()
    mydb.close()

    return 'Success'
