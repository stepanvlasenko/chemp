from databaseModels import db, Comment
from datetime import date

def createComment(userId: int, postId: int, content: str, publishDate: date, imageURL: str) -> int:
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
    
def readComment(id: int) -> Comment:
    try:
        comment = Comment.get(Comment.id == id)
        return comment
    except:
        return 0

# ??????
def updateComment(id: int, **args) -> int:
    try:
        updatedData = {}
        for key in args:
            if key in Comment._meta.fields:
                updatedData[Comment._meta.fields[key]] = args[key]

        comment = Comment.update(args).where(Comment.id == id)
        comment.execute()
        return 1
    except:
        return 0


def deleteComment(id: int) -> int:
    try:
        comment = readComment(id)
        comment.delete_instance()
        return 1
    except:
        return 0
