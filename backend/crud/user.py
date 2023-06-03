from databaseModels import db, User
from datetime import date

def createUser(firstName: str, secondName: str, middleName: str, birthDate: date, city: str, school: str, avatarURL: str) -> int:
    try:
        user = User.create(
            firstName = firstName,
            secondName = secondName,
            middleName = middleName,
            birthDate = birthDate,
            city = city,
            school = school,
            avatarURL = avatarURL
        )
        return user.id
    except:
        return 0
    
def readUser(id: int) -> (User | int):
    try:
        user = User.get(User.id == id)
        return user
    except:
        return 0

def updateUser(id: int, **args) -> int:
    try:
        updatedData = {}
        for key in args:
            if key in User._meta.fields:
                updatedData[User._meta.fields[key]] = args[key]

        user = User.update(args).where(User.id == id)
        user.execute()
        return 1
    except:
        return 0

def deleteUser(id: int) -> int:
    try:
        user = readUser(id)
        user.delete_instance()
        return 1
    except:
        return 0
