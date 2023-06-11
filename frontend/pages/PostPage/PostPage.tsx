import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAPI } from "../../assets/ts/api";
import { IComment, IPost, IUser } from "../../assets/ts/types";

import SendComment from "../../components/SendComment/SendComment";
import PostUserInfo from "../../components/PostUserInfo/PostUserInfo";
import PostComment from "../../components/PostComment/PostComment";

import './PostPage.css'

export default function PostPage() {
    const [ post, setPost ] = useState<IPost>()
    const [ user, setUser ] = useState<IUser>()
    const [ comments, setComments ] = useState<IComment[]>([])

    const params = useParams()
    const postId = +(params.postId || 0)

    const postAPI = useAPI().usePostAPI()
    const userAPI = useAPI().useUserAPI()
    
    useEffect(() => {
        postAPI.getPost(postId)
            .then((post) => {
                setPost(post)
                return post as IPost
            })
            .then((post) => userAPI.getUser(post.userId)
            .then(setUser))

        postAPI.getComments(postId).then(setComments)
    }, [])

    const handleCreateComment = (comment: IComment) => {
        setComments((comments) => [...comments, comment])
    }
    return (
        <div className="post-page">
            <div className="post-page__content">
                <img className="content__image" src={post?.imageURL} alt="" />
                <div className="content__block">
                    <h1>{post && post.title}</h1>
                    <div>{post && post.content}</div>
                </div>
                <div className="content__block">
                    <h1>Комментарии</h1>
                    <div className="content__comments">
                        {post && <SendComment postId={post.id} onCreateComment={handleCreateComment}/>}
                        {comments.map((v) => (
                            <PostComment key={v.id} comment={v} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="post-page__user-block">
                {user && <Link to={`/user/${user.id}`}><PostUserInfo middleName={user.middleName} firstName={user.firstName} secondName={user.secondName} date={user.birthDate} imageURL={user.avatarURL} /></Link>}
            </div>
        </div>
    )
}