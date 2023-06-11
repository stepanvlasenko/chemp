import { useRef } from 'react'
import { useAPI } from '../../assets/ts/api'
import { useUserStore } from '../../store/userStore'
import { sendFile, getFileURL } from '../../assets/ts/firebase'
import { v4 as uuidv4 } from 'uuid'
import { IComment, RawComment } from "../../assets/ts/types";

import BaseButton from '../BaseButton/BaseButton'
import BaseInput from '../BaseInput/BaseInput'

import './SendComment.css'

type buttonEventHandler = React.MouseEventHandler<HTMLButtonElement>

interface SendCommentProps {
    postId: number
    onCreateComment?: (comment: IComment) => void
}

export default function SendComment({ postId, onCreateComment }: SendCommentProps) {
    const commentAPI = useAPI().useCommentAPI()

    const currentUser = useUserStore((state) => state.user)

    const form = useRef<HTMLFormElement>(null)

    const handleSubmit: buttonEventHandler = async (event) => {
        event.preventDefault()

        if (!form.current) return

        if (!currentUser) {
            alert('Вы не авторизованы.')
            return
        }

        const formData = new FormData(form.current)
        const data = Object.fromEntries(formData.entries())
        
        if (!data.image || !data.content) {
            alert('Вы заполнили не все поля.')
            return
        }

        const thisDate = new Date()
        const today = `${thisDate.getDate()}.${thisDate.getMonth()}.${thisDate.getFullYear()}`

        const file = data.image
        const blob = new Blob([file])
        const fileUint8Array = new Uint8Array(await blob.arrayBuffer())

        const name = uuidv4()
        await sendFile('user', name, fileUint8Array)
        const fileURL = await getFileURL('user', name)
        
        const comment: RawComment = {
            userId: currentUser.id,
            postId: postId,
            content: data.content as string,
            publishDate: today,
            imageURL: fileURL
        }

        const createdComment = await commentAPI.createComment(comment)
        onCreateComment?.(createdComment)
        alert('Комментарий успешно создан.')
    }
    return (
        <form ref={form} className="comment-form">
            <p>Оставить комментарий</p>
            <div className='form__block'>
                <p>Изображение:</p>
                <BaseInput type="file" name="image" />
            </div>
            <div className='form__block'>
                <BaseInput type="textarea" name="content" />
                <BaseButton text="Отправить" onClick={handleSubmit}/>
            </div>
        </form>
    )
}