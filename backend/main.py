from flask import Flask, request

from crud.user import *
from crud.post import *
from crud.comment import *

app = Flask(__name__)

# User api
@app.post('/user')
def apiCreateUser():
    data = request.form
    return createUser(**data)

@app.get('/user/<int:id>')
def apiGetUser(id: int):
    return readUser(id)

@app.put('/user/<int:id>')
def apiUpdateUser(id: int):
    data = request.form
    return updateUser(id, **data)

@app.delete('/user/<int:id>')
def apiDeleteUser(id: int):
    return deleteUser(id)

# Post api
@app.post('/post')
def apiCreatePost():
    data = request.form
    return createPost(**data)

@app.get('/post/<int:id>')
def apiGetPost(id: int):
    return readPost(id)

@app.put('/post/<int:id>')
def apiUpdatePost(id: int):
    data = request.form
    return updatePost(id, **data)

@app.delete('/post/<int:id>')
def apiDeletePost(id: int):
    return deletePost(id)

# Comment api
@app.post('/comment')
def apiCreateComment():
    data = request.form
    return createComment(**data)

@app.get('/comment/<int:id>')
def apiGetComment(id: int):
    return readComment(id)

@app.put('/comment/<int:id>')
def apiUpdateUser(id: int):
    data = request.form
    return updateComment(id, **data)

@app.delete('/comment/<int:id>')
def apiDeleteUser(id: int):
    return deleteComment(id)

app.run()