from peewee import *
from datetime import date

db = SqliteDatabase('./backend/dev.db')

class BaseModel(Model):
    class Meta:
        database = db

class User(BaseModel):
    email = CharField()
    password = CharField()
    firstName = CharField()
    secondName = CharField()
    middleName = CharField()
    birthDate = CharField()
    city = CharField()
    school = CharField()
    avatarURL = CharField()

class Post(BaseModel):
    userId = IntegerField()
    title = CharField()
    content = TextField()
    publishDate = CharField()
    imageURL = CharField()

class Comment(BaseModel):
    userId = IntegerField()
    postId = IntegerField()
    content = TextField()
    publishDate = CharField()
    imageURL = CharField()
