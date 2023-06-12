import { useEffect, useState } from 'react'
import { useAPI } from '../../assets/ts/api'

import { IComment, IUser } from '../../assets/ts/types'

import './PostComment.css'
import { Link } from 'react-router-dom'

interface PostCommentProps {
    comment: IComment
}

export default function PostComment({ comment }: PostCommentProps) {
    const userAPI = useAPI().useUserAPI()
    const [user, setUser] = useState<IUser>()
    useEffect(() => {
        userAPI.getUser(comment.userId).then(setUser)
    }, [])

    return (
        <div className="post-comment">
            <div className="post-comment__content">
                <img className="post-comment__icon" src={user?.avatarURL} />
                <div className="post-comment__user-text">
                    <div className="post-comment__info">
                        <div>
                            <Link to={`/user/${user?.id}`}><h2> {user?.middleName} {user?.firstName} {user?.secondName} </h2></Link>
                        </div>
                        <div>
                            {comment.publishDate}
                        </div>
                    </div>
                    <div className="post-comment__text">
                    {comment.content}    
                    </div>
                </div>
            </div>
            <img className="post-comment__image" src={comment.imageURL} />
        </div>
    )
}