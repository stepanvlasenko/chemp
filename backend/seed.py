# Initilize db
from datetime import date
from databaseModels import db, User, Post, Comment

db.create_tables(models = [User, Post, Comment])
