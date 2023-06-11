from flask import Flask, request
from flask_cors import CORS

from crud import *
from authentication import *

app = Flask(__name__)
CORS(app)

# User api
userAPI = modelCRUD(User)
postAPI = modelCRUD(Post)
commentAPI = modelCRUD(Comment)

@app.post('/user')
def apiCreateUser():
    data = request.json
    return userAPI['create'](data)

@app.route('/user', methods=['GET', 'PUT', 'DELETE'])
def apiIdUser():
    id = request.args['id']

    if request.method == 'GET':
        return userAPI['read'](id)
    if request.method == 'PUT':
        data = request.json
        return userAPI['update'](id, data)
    if request.method == 'DELETE':
        return userAPI['delete'](id)

@app.get('/user/posts')
def apiUserPosts():
    userId = request.args['id']
    return getPostsOfUser(userId)

# Post api
@app.post('/post')
def apiCreatePost():
    data = request.json
    return postAPI['create'](data)

@app.route('/post', methods=['GET', 'PUT', 'DELETE'])
def apiIdPost():
    id = request.args['id']

    if request.method == 'GET':
        return postAPI['read'](id)
    if request.method == 'PUT':
        data = request.json
        return postAPI['update'](id, data)
    if request.method == 'DELETE':
        return postAPI['delete'](id)

@app.get('/post/comments')
def apiPostComments():
    postId = request.args['id']
    return getCommentsOfPost(postId)

@app.get('/post/all')
def apiAllPosts():
    return getAll(Post)

# Comment api
@app.post('/comment')
def apiCreateComment():
    data = request.json
    return commentAPI['create'](data)

@app.route('/comment', methods=['GET', 'PUT', 'DELETE'])
def apiIdComment():
    id = request.args['id']

    if request.method == 'GET':
        return commentAPI['read'](id)
    if request.method == 'PUT':
        data = request.json
        return commentAPI['update'](id, data)
    if request.method == 'DELETE':
        return commentAPI['delete'](id)

@app.get('/authentication')
def apiAuthentication():
    email = request.args['email']
    password = request.args['password']
    return authenticate(email, password)

app.run()