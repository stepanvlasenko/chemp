import './PostComment.css'

interface PostCommentProps {
    avatarURL: string
    middleName: string
    firstName: string
    secondName: string
    content: string
    imageURL: string
    date: string
}

export default function PostComment({
    firstName,
    secondName,
    imageURL,
    middleName,
    avatarURL,
    content,
    date
}: PostCommentProps) {
    return (
        <div className="post-comment">
            <div className="post-comment__content">
                <img className="post-comment__icon" src={avatarURL} />
                <div className="post-comment__user-text">
                    <div className="post-comment__info">
                        <div>
                            <h2> {middleName} {firstName} {secondName} </h2>
                        </div>
                        <div>
                            {date}
                        </div>
                    </div>
                    <div className="post-comment__text">
                    {content}    
                    </div>
                </div>
            </div>
            <img className="post-comment__image" src={imageURL} />
        </div>
    )
}