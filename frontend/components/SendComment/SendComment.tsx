import { useRef } from 'react'
import { useUserStore } from '../../store/userStore'
import { v4 as uuidv4 } from 'uuid'
import { useAPI } from '../../assets/ts/api'
import { sendFile, getFileURL } from '../../assets/ts/firebase'
import { RawComment } from "../../assets/ts/types";
import BaseButton from '../BaseButton/BaseButton'
import BaseInput from '../BaseInput/BaseInput'
import './SendComment.css'

type buttonEventHandler = React.MouseEventHandler<HTMLButtonElement>

interface SendCommentProps {
    postId: number
}

export default function SendComment({ postId }: SendCommentProps) {
    const commentAPI = useAPI().useCommentAPI()

    const currentUser = useUserStore((state) => state.user)

    const form = useRef<HTMLFormElement>(null)

    const thisDate = new Date()
    const today = `${thisDate.getDay()}.${thisDate.getMonth()}.${thisDate.getFullYear()}`

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

        console.log(await commentAPI.createComment(comment))
    }
    return (
        <form ref={form} className="comment-form">
            <p>Оставить комментарий</p>
            <div className='form__image'>
                <p>Изображение:</p>
                <BaseInput type="file" name="image" />
            </div>
            <div className='form__content'>
                <BaseInput type="textarea" name="content" />
                <BaseButton text="Отправить" onClick={handleSubmit}/>
            </div>
        </form>
    )
}