import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAPI } from '../../assets/ts/api'
import { useUserStore } from '../../store/userStore'
import { IPost, IUser } from '../../assets/ts/types'

import ProfileBlock from '../../components/ProfileBlock/ProfileBlock'
import Post from '../../components/Post/Post'
import BaseButton from '../../components/BaseButton/BaseButton'

import './UserPage.css'

export default function UserPage() {
    const params = useParams()
    const userId = +(params.userId || 0)

    const currentUser = useUserStore((state) => state.user)

    const [user, setUser] = useState<IUser>()
    const [posts, setPosts] = useState<IPost[]>([])
    const userAPI = useAPI().useUserAPI()

    useEffect(() => {
        userAPI.getUser(userId).then(setUser)
        userAPI.getPosts(userId).then(setPosts)
    }, [])

    return (
        <div className="user-page">
            {user && <ProfileBlock user={user} />}
            {user && currentUser && user.id === currentUser.id && <Link to={`/post/create/${user.id}`}><BaseButton text="Добавить пост"/></Link>}
            <div className="user-page__last-posts">
                <h1>Последние посты</h1>
                <div className="last-posts__list">
                    {posts.map((v) => (
                        <Link key={v.id} to={`/post/${v.id}`}><Post post={v} /></Link>
                    ))}
                </div>
            </div>
        </div>

    )
}