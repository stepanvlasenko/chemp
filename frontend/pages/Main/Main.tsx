import { useEffect, useState } from 'react'
import { useAPI } from '../../assets/ts/api'
import { IPost } from '../../assets/ts/types'

import Post from '../../components/Post/Post'
import { Link } from 'react-router-dom'

import './Main.css'

export default function Main() {    
    const postAPI = useAPI().usePostAPI()
    const [ posts, setPosts ] = useState<IPost[]>([])
    useEffect(() => {
        postAPI.getAll().then(setPosts)
    }, [])
    return (
        <div className="main-page">
            <h1>Последние посты</h1>
            <div className="main-page__posts">
                {posts.map((v) => (
                    <Link to={`/post/${v.id}`} key={v.id}><Post post={v} /></Link>
                ))}
            </div>
        </div>

    )
}