from databaseModels import db, User
from datetime import date

def createUser(firstName: str, secondName: str, middleName: str, birthDate: date, city: str, school: str, avatarURL: str):
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
    
def readUser(id: int):
    try:
        user = User.get(User.id == id)
        return user
    except:
        return 0

# ??????
def updateUser():
    status: int
    return status

def deleteUser(id: int):
    try:
        user = readUser(id)
        user.delete_instance()
        return 1
    except:
        return 0
