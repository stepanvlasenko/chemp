import './TheHeader.css'

interface HeaderProps {
    avatarURL?: string
}

export default function TheHeader({ avatarURL = "https://upload.wikimedia.org/wikipedia/commons/7/70/Solid_white.svg" }: HeaderProps) {

    return (
        <header className="header">
            <div className="lorem">
                Lorem
            </div>
            <nav className="navigation"> 
                <ul className="navigation__list">
                    <li> 
                        <a className="navigation__link"> 
                            Главная     
                        </a> 
                    </li>
                    <li> 
                        <a className="navigation__link"> 
                            Войти       
                        </a> 
                    </li>
                    <li> 
                        <a className="navigation__link"> 
                            Регистрация 
                        </a> 
                    </li>
                </ul>
                <a className="navigation__profile">
                    <img className='navigation__avatar' src={avatarURL} />
                </a>
            </nav>
        </header>
    )
}