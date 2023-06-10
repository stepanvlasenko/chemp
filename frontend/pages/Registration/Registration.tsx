import { useRef } from "react";

import { RawUser } from "../../assets/ts/types";

import { v4 as uuidv4 } from 'uuid'

import { useAPI } from '../../assets/ts/api'
import { sendFile, getFileURL } from '../../assets/ts/firebase'

import BaseButton from "../../components/BaseButton/BaseButton";
import BaseInput from "../../components/BaseInput/BaseInput";

import './Registration.css'

type inputEventHandler = React.ChangeEventHandler<HTMLInputElement>
type buttonEventHandler = React.MouseEventHandler<HTMLButtonElement>

export default function Registration() {
    const userAPI = useAPI().useUserAPI()

    const form = useRef<HTMLFormElement>(null)

    const handleSubmit: buttonEventHandler = async (event) => {
        event.preventDefault()

        if (!form.current) return

        const formData = new FormData(form.current)
        const data = Object.fromEntries(formData.entries())

        if (!data.email || !data.password || !data.birthDate || !data.middleName || !data.firstName || !data.secondName || !data.avatar || !data.city || !data.school) {
            alert('Вы заполнили не все поля.')
            return
        }

        const file = data.avatar
        const blob = new Blob([file])
        const fileUint8Array = new Uint8Array(await blob.arrayBuffer())

        const name = uuidv4()
        await sendFile('user', name, fileUint8Array)
        const fileURL = await getFileURL('user', name)

        const newUser: RawUser = {
            email: data.email as string,
            firstName: data.firstName as string,
            secondName: data.secondName as string,
            middleName: data.middleName as string,
            birthDate: data.birthDate as string,
            city: data.city as string,
            school: data.school as string,
            avatarURL: fileURL,
            password: data.password as string
        } 
        await userAPI.createUser(newUser)
        alert('Пользователь зарегистрирован')
    }

    return (
        <div className="registration">
            <h1>Регистрация</h1>
            <form ref={form} className="registration__form">
                <div className="form__column">
                    <div className="column__item">
                        <h2>Почта</h2>
                        <BaseInput type="text" placeholder="Почта" name="email"/>
                    </div>
                    <div className="column__item">
                        <h2>Пароль</h2>
                        <BaseInput type="password" placeholder="Пароль" name="password" />
                    </div>
                </div>
                <div className="form__column">
                    <div className="column__item">
                        <h2>Дата рождения</h2>
                        <BaseInput type="text" placeholder="Дата рождения (01.01.2000)" name="birthDate" />
                    </div>
                    <div className="column__item">
                        <h2>Фамилия</h2>
                        <BaseInput type="text" placeholder="Фамилия" name="middleName" />
                    </div>
                    <div className="column__item">
                        <h2>Имя</h2>
                        <BaseInput type="text" placeholder="Имя" name="firstName" />
                    </div>
                    <div className="column__item">
                        <h2>Отчество</h2>
                        <BaseInput type="text" placeholder="Отчество" name="secondName" />
                    </div>
                    <div className="column__item">
                        <h2>Изображение профиля</h2>
                        <BaseInput type="file" placeholder="Изображение профиля" name="avatar" />
                    </div>
                </div>
                <div className="form__column">
                    <div className="column__item">
                        <h2>Город проживания</h2>
                        <BaseInput type="text" placeholder="Город проживания" name="city" />
                    </div>
                    <div className="column__item">
                        <h2>Школа</h2>
                        <BaseInput type="text" placeholder="Школа" name="school" />
                    </div>
                </div>
            </form>
            <BaseButton text="Зарегистрировться" onClick={handleSubmit}/>
        </div>
    )
}