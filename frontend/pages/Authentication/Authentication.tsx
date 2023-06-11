import { useRef } from 'react'
import { useAPI } from '../../assets/ts/api'
import { useUserStore } from '../../store/userStore'

import BaseButton from '../../components/BaseButton/BaseButton'
import BaseInput from '../../components/BaseInput/BaseInput'

import './Authentication.css'

type buttonEventHandler = React.MouseEventHandler<HTMLButtonElement>

export default function Authentication() {
    const setUser = useUserStore((state) => state.setUser)
    const currentUser = useUserStore((state) => state.user)

    const authenticationAPI = useAPI().useAuthenticationAPI()
    const form = useRef<HTMLFormElement>(null)

    const handleSubmit: buttonEventHandler = async (event) => {
        event.preventDefault()

        if (!form.current) return

        const formData = new FormData(form.current)

        const data = Object.fromEntries(formData.entries())
        const email = data.email as string
        const password = data.password as string

        if (!email || !password) {
            alert('Вы заполнили не все поля.')
            return
        }
        
        const responce = await authenticationAPI.authenticate(email, password)
        if (responce.status == false) {
            alert(responce.data)
        } else {
            setUser(responce.data)
            alert('Вы успешно авторизованы.')
        }
    }

    return (
        <div className="authentication">
            <h1>Вход</h1>
            <form ref={form} className="authentication-form">
                <div className="form__row">
                    <h2>Электронная почта</h2>
                    <BaseInput type='text' placeholder='Почта' name='email'/>
                </div>
                <div className="form__row">
                    <h2>Пароль</h2>
                    <BaseInput type='password' placeholder='Пароль' name='password'/>
                </div>
            </form>
            <BaseButton text='Войти' onClick={handleSubmit}/>
        </div>
    )
}