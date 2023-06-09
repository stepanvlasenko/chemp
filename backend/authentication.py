from databaseModels import User
from playhouse.shortcuts import model_to_dict

def authentication(email: str, password: str):
    user = User.get_or_none(User.email == email)

    if user == None:
        return False

    if user.pasword == password:
        return model_to_dict(user)
    else:
        return False