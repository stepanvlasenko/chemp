# from flask import Flask
# from datetime import date
# from crud.user import *
# from crud.post import *
# from crud.comment import *

# app = Flask(__name__)

# @app.post('/user')
# def postUser(firstName: str, secondName: str, middleName: str, birthDate: date, city: str, school: str, avatarURL: str):
#     return createUser(firstName, secondName, middleName, birthDate, city, school, avatarURL)

# @app.get('/user/<int:id>')
# def getUser(id: int):
#     return readUser(id)
