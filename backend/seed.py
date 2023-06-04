# Initilize db
from datetime import date
from databaseModels import db, User, Post, Comment
# from crud.user import *

db.connect()
db.create_tables(models = [User, Post, Comment])
