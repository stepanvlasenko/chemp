from databaseModels import db, Comment
from datetime import date

def createComment(userId: int, postId: int, content: str, publishDate: date, imageURL: str):
    try:
        comment = Comment.create(
            userId = userId,
            postId = postId,
            content = content,
            publishDate = publishDate,
            imageURL = imageURL
        )
        return comment.id
    except:
        return 0
    
def readComment(id: int):
    try:
        comment = Comment.get(Comment.id == id)
        return comment
    except:
        return 0

# ??????
def updateComment():
    try:
        return 1
    except:
        return 0

def deletePost(id: int):
    try:
        comment = readComment(id)
        comment.delete_instance()
        return 1
    except:
        return 0
