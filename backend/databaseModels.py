from peewee import *
from datetime import date

db = SqliteDatabase('./backend/dev.db')

class BaseModel(Model):
    class Meta:
        database = db

class User(BaseModel):
    firstName = CharField()
    secondName = CharField()
    middleName = CharField()
    birthDate = DateField()
    city = CharField()
    school = CharField()
    avatarURL = CharField()

class Post(BaseModel):
    userId = IntegerField()
    title = CharField()
    content = TextField()
    publishDate = DateField()
    imageURL = CharField()

class Comment(BaseModel):
    userId = IntegerField()
    postId = IntegerField()
    content = TextField()
    publishDate = DateField()
    imageURL = CharField()

db.connect()
db.create_tables(models = [User, Post, Comment])

# myUser = User(firstName = 'Kyle', secondName = 'Jackson', middleName = 'Bob', birthDate = date(2006, 1, 6), city = 'New-York', school = 'Monaco School', avatarURL = 'https://google.com')
# myUser.save()
# print(myUser.firstName, myUser.birthDate)