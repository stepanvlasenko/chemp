from flask import Flask, request
from flask_cors import CORS

from crud import *

app = Flask(__name__)
CORS(app)

# User api
userAPI = modelCRUD(User)
postAPI = modelCRUD(Post)
commentAPI = modelCRUD(Comment)

@app.post('/user')
def apiCreateUser():
    data = request.json
    return userAPI['create'](data).__dict__

@app.route('/user', methods=['GET', 'PUT', 'DELETE'])
def apiIdUser():
    id = request.args['id']
    
    if request.method == 'GET':
        return userAPI['read'](id).__dict__
    if request.method == 'PUT':
        data = request.json
        return userAPI['update'](id, data).__dict__
    if request.method == 'DELETE':
        return userAPI['delete'](id).__dict__

# Post api
@app.post('/post')
def apiCreatePost():
    data = request.form
    return postAPI['create'](data).__dict__

@app.route('/post', methods=['GET', 'PUT', 'DELETE'])
def apiIdPost():
    id = request.args['id']

    if request.method == 'GET':
        return postAPI['read'](id).__dict__
    if request.method == 'PUT':
        data = request.form
        return postAPI['update'](id, data).__dict__
    if request.method == 'DELETE':
        return postAPI['delete'](id).__dict__

# Comment api
@app.post('/comment')
def apiCreateComment():
    data = request.form
    return commentAPI['create'](data).__dict__

@app.route('/comment', methods=['GET', 'PUT', 'DELETE'])
def apiIdComment():
    id = request.args['id']

    if request.method == 'GET':
        return commentAPI['read'](id).__dict__
    if request.method == 'PUT':
        data = request.form
        return commentAPI['update'](id, data).__dict__
    if request.method == 'DELETE':
        return commentAPI['delete'](id).__dict__

app.run()