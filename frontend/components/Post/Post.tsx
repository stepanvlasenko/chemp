import './post.css'

/**
 * ToDo:
 * Move to 'types.ts'
 * request user
 */
interface IPost {
    id: number
    userId: number
    title: string
    content: string
    publishDate: string
    imageURL: string
}

interface PostProps {
    post: IPost
}

export default function Post({post}: PostProps) {

    return (
        <div className='post'>
            <div className='post__info'>
                <img className='info__avatar' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png' />
                <div className='info__bio'>
                    <h1>Фамилия Имя Отчество</h1>
                    <h2>{post.publishDate}</h2>
                </div>
            </div>
            <div className='post__content'>
                <h1>{post.title}</h1>
                <img className="content__image" src={post.imageURL} />
            </div>
        </div>
    )
}