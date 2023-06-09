from databaseModels import User
from playhouse.shortcuts import model_to_dict

def createResponce(status: bool, data):
    return {
        'status': status,
        'data': data
    }
def authenticate(email: str, password: str):
    user = User.get_or_none(User.email == email)

    if user == None:
        return createResponce(False, 'Пользователь с указанной электронной почтой не найден.')

    if user.password == password:
        return createResponce(True, model_to_dict(user))
    else:
        return createResponce(False, 'Пароль указан неверно.')