import { useEffect, useState } from 'react'

import BaseButton from '../../components/BaseButton/BaseButton'
import BaseInput from '../../components/BaseInput/BaseInput'

import './createPost.css'

type inputEventHandler = React.ChangeEventHandler<HTMLInputElement>
type buttonEventHandler = React.MouseEventHandler<HTMLButtonElement>

export default function CreatePost() {
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

    const handleSubmit: buttonEventHandler = (event) => {
        event.preventDefault()

        
    }

    useEffect(() => {
        console.log(title, content, file)
    }, [title, content, file])
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