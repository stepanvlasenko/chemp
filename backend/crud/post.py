from databaseModels import db, Post
from datetime import date

def createPost(userId: int, title: str, content: str, publishDate: date, imageURL: str) -> int:
    try:
        db.connect()
        post = Post.create(
            userId = userId,
            title = title,
            content = content,
            publishDate = publishDate,
            imageURL = imageURL
        )
        db.close()
        return post.id
    except:
        return 0
    
def readPost(id: int) -> Post:
    try:
        db.connect()
        post = Post.get(Post.id == id)
        db.close()
        return post
    except:
        return 0

# ??????
def updatePost(id: int, **args) -> int:
    try:
        db.connect()
        updatedData = {}
        for key in args:
            if key in Post._meta.fields:
                updatedData[Post._meta.fields[key]] = args[key]

        post = Post.update(args).where(Post.id == id)
        post.execute()
        db.close()
        return 1
    except:
        return 0

def deletePost(id: int) -> int:
    try:
        db.connect()
        post = readPost(id)
        post.delete_instance()
        db.close()
        return 1
    except:
        return 0
