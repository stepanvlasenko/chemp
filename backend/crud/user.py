from databaseModels import db, User
from datetime import date

def createUser(email: str, firstName: str, secondName: str, middleName: str, birthDate: date, city: str, school: str, avatarURL: str) -> int:
    try:
        db.connect()
        user = User.get_or_none(User.email == email)

        if (user == None):
            user = User.create(
                email = email,
                firstName = firstName,
                secondName = secondName,
                middleName = middleName,
                birthDate = birthDate,
                city = city,
                school = school,
                avatarURL = avatarURL
            )
        db.close()
        return user.id
    except:
        return 0
    
def readUser(id: int) -> User:
    try:
        db.connect()
        user = User.get(User.id == id)
        db.close()
        return user
    except:
        return 0

def updateUser(id: int, **args) -> int:
    try:
        db.connect()
        updatedData = {}
        for key in args:
            if key in User._meta.fields:
                updatedData[User._meta.fields[key]] = args[key]

        user = User.update(args).where(User.id == id)
        user.execute()
        db.close()
        return 1
    except:
        return 0

def deleteUser(id: int) -> int:
    try:
        db.connect()
        user = readUser(id)
        user.delete_instance()
        db.close()
        return 1
    except:
        return 0
