from databaseModels import db, Post
from datetime import date

def createPost(userId: int, title: str, content: str, publishDate: date, imageURL: str):
    try:
        post = Post.create(
            userId = userId,
            title = title,
            content = content,
            publishDate = publishDate,
            imageURL = imageURL
        )
        return post.id
    except:
        return 0
    
def readPost(id: int):
    try:
        post = Post.get(Post.id == id)
        return post
    except:
        return 0

# ??????
def updatePost():
    try:
        return 1
    except:
        return 0

def deletePost(id: int):
    try:
        post = readPost(id)
        post.delete_instance()
        return 1
    except:
        return 0
