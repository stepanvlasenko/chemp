from flask import Flask, request
from flask_cors import CORS

from crud.user import *
from crud.post import *
from crud.comment import *

app = Flask(__name__)
CORS(app)

# User api
@app.post('/user')
def apiCreateUser():
    data = request.form
    return createUser(**data)

@app.route('/user/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def apiIdUser(id: int):
    if request.method == 'GET':
        return readUser(id)
    if request.method == 'PUT':
        data = request.form
        return updateUser(id, **data)
    if request.method == 'DELETE':
        return deleteUser(id)

# Post api
@app.post('/post')
def apiCreatePost():
    data = request.form
    return createPost(**data)

@app.route('/post/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def apiIdPost(id: int):
    if request.method == 'GET':
        return readPost(id)
    if request.method == 'PUT':
        data = request.form
        return updatePost(id, **data)
    if request.method == 'DELETE':
        return deletePost(id)

# Comment api
@app.post('/comment')
def apiCreateComment():
    data = request.form
    return createComment(**data)

@app.route('/comment/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def apiIdComment(id: int):
    if request.method == 'GET':
        return readComment(id)
    if request.method == 'PUT':
        data = request.form
        return updateComment(id, **data)
    if request.method == 'DELETE':
        return deleteComment(id)

app.run()