import './TheHeader.css'

export default function TheHeader(){
    
    return (
        <>
        <header className="header">
    <div className="lorem">
        Lorem
    </div>
    <nav className="navigation"> 
        <ul className="navigation_list">
            <li> 
                <a className="navigation_link"> 
                    Главная     
                </a> 
            </li>
            <li> 
                <a className="navigation_link"> 
                    Войти       
                </a> 
            </li>
            <li> 
                <a className="navigation_link"> 
                    Регистрация 
                </a> 
            </li>
        </ul>
        <a className="navigation_profile">
          <div className="profile_icon"></div>
        </a>
    </nav>
</header>
        </>
    )
}