import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { RawPost } from '../../assets/ts/types'

import { useAPI } from '../../assets/ts/api'
import { sendFile, getFileURL } from '../../assets/ts/firebase'

import BaseButton from '../../components/BaseButton/BaseButton'
import BaseInput from '../../components/BaseInput/BaseInput'

import './createPost.css'

type inputEventHandler = React.ChangeEventHandler<HTMLInputElement>
type buttonEventHandler = React.MouseEventHandler<HTMLButtonElement>

interface CreatePostProps {
    userId: number
}

export default function CreatePost({ userId }: CreatePostProps) {
    const postAPI = useAPI().usePostAPI()

    const [title, setTitle] = useState('')    
    const [content, setContent] = useState('')    
    const [file, setFile] = useState<File>()
    
    const handleTitleChange: inputEventHandler = (event) => {
        const target = event.target as HTMLInputElement
        setTitle(target.value)
    }

    const handleContentChange: inputEventHandler = (event) => {
        const target = event.target as HTMLInputElement
        setContent(target.value)
    }

    const handleFileChange: inputEventHandler = (event) => {
        const target = event.target as HTMLInputElement
        if (target.files) {
            setFile(target.files[0])
        }
    }

    const handleSubmit: buttonEventHandler = async (event) => {
        event.preventDefault()

        if (!(title && content && file)) return

        const blob = new Blob([file])
        const fileUint8Array = new Uint8Array(await blob.arrayBuffer())

        const fileName = uuidv4()

        await sendFile('post', fileName, fileUint8Array)
        const fileURL = await getFileURL('post', fileName)
        
        const thisDate = new Date()
        const today = `${thisDate.getDay()}.${thisDate.getMonth()}.${thisDate.getFullYear()}`

        const postData: RawPost = {
            userId,
            title,
            content,
            imageURL: fileURL,
            publishDate: today
        }
        
        await postAPI.createPost(postData)
    }

    return (
        <div className='create-post-page'>
            <h1>Создание поста</h1>
            <form className='create-post-form'>
                <div className='create-post-form__input'>
                    <h2>Заголовок</h2>
                    <BaseInput placeholder='' type='text' name='title' onChange={handleTitleChange} />
                </div>
                <div className='create-post-form__input'>
                    <h2>Контент</h2>
                    <BaseInput placeholder='' type='textarea' name='content' onChange={handleContentChange} />
                </div>
                <div className='create-post-form__input'>
                    <h2>Изображение</h2>
                    <BaseInput placeholder='' type='file' name='file' onChange={handleFileChange}/>
                </div>
                <BaseButton text='Создать' onClick={handleSubmit}/>
            </form>
        </div>
    )
}