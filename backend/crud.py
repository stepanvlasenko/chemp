from databaseModels import db, User, Post, Comment
from playhouse.shortcuts import model_to_dict, update_model_from_dict
from baseResponce import baseResponce

def modelCRUD(model: (User | Post | Comment)):
    def create(data):
        db.connect()

        if (model == User):
            user = User.get_or_none(User.email == data['email'])
            if (user != None):
                return baseResponce(True, model_to_dict(user))
            
        instance = model.create(**data)
        db.close()

        responce = baseResponce(True, model_to_dict(instance))
        return responce
    
    def read(id: int):
        db.connect()
        instance = model.get(model.id == id)
        db.close()

        responce = baseResponce(True, model_to_dict(instance))
        return responce
    
    def update(id: int, data):
        db.connect()
        instance = model.get(model.id == id)
        update_model_from_dict(instance, data)
        instance.save()
        db.close()

        responce = baseResponce(True, model_to_dict(instance))
        return responce
    
    def delete(id: int):
        db.connect()
        instance = model.get(model.id == id)
        instance.delete_instance()
        db.close()

        responce = baseResponce(True, None)
        return responce
    
    return {
        'create': create,
        'read': read,
        'update': update,
        'delete': delete
    }
