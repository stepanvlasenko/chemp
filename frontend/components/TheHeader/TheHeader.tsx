import { Link } from 'react-router-dom'
import { useUserStore } from '../../store/userStore'
import './TheHeader.css'

export default function TheHeader() {
    const currentUser = useUserStore((state) => state.user)

    const avatarURL = currentUser?.avatarURL || "https://upload.wikimedia.org/wikipedia/commons/7/70/Solid_white.svg"

    return (
        <header className="header">
            <div className="title">
                <h1>Расскажи</h1>
            </div>
            <nav className="navigation"> 
                <ul className="navigation__list">
                    <li> 
                        <Link to={`/`}> 
                            <div className="navigation__link">
                                Главная
                            </div>
                        </Link> 
                    </li>
                    <li> 
                        <Link to={`/authentication`}> 
                            <div className="navigation__link">
                                Войти
                            </div>
                        </Link> 
                    </li>
                    <li> 
                        <Link to={`/registration`}> 
                            <div className="navigation__link">
                                Регистрация
                            </div>
                        </Link> 
                    </li>
                </ul>
                <div className="navigation__profile">
                    {currentUser ? (
                        <Link to={`/user/${currentUser.id}`}><img className='navigation__avatar' src={avatarURL} /></Link>
                    ) : (
                        <img className='navigation__avatar' src={avatarURL} />
                    )}
                </div>
            </nav>
        </header>
    )
}