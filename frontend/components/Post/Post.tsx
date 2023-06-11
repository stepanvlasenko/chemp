import { useEffect, useState } from 'react'
import { IPost, IUser } from '../../assets/ts/types'
import './Post.css'
import { useAPI } from '../../assets/ts/api'

interface PostProps {
    post: IPost
}

export default function Post({post}: PostProps) {
    const [user, setUser] = useState<IUser>()

    const userAPI = useAPI().useUserAPI()
    useEffect(() => {
        userAPI.getUser(post.userId).then((user) => setUser(user))
    }, [])

    return (
        <div className='post'>
            <div className='post__info'>
                <img className='info__avatar' src={user?.avatarURL} />
                <div className='info__bio'>
                    <h1>{user?.middleName} {user?.firstName} {user?.secondName}</h1>
                    <h2>{post.publishDate}</h2>
                </div>
            </div>
            <div className='post__content'>
                <h1>{post.title}</h1>
                <img className="post-content__image" src={post.imageURL} />
            </div>
        </div>
    )
}