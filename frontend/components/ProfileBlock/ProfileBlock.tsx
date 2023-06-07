import './ProfileBlock.css'

interface ProfileBlockProps{
    imageURL: string
    SecondName: string
    FirstName: string
    middleName: string
    city: string
    dateBirthday: string
    school: string 
}

export default function ProfileBlock({
    FirstName,
    SecondName,
    city,
    dateBirthday,
    imageURL,
    middleName,
    school
}:ProfileBlockProps) {

    return(
        <div className="profile-block">
            <img className="profile-block__icon" src={imageURL} />
            <div className="profile-block__info">
                <div className="profile-block__inf">
                        Фамилия Имя Отчество:
                    <div className="profile-block__ne-imput">
                        {SecondName} {FirstName} {middleName}
                    </div>
                </div>
                <div className="profile-block__inf">
                    Город проживания:
                    <div className="profile-block__ne-imput">
                        {city}
                    </div>    
                </div>
                <div className="profile-block__inf">
                    Дата Рождения:
                    <div className="profile-block__ne-imput">
                        {dateBirthday}
                    </div>
                </div>
                <div className="profile-block__inf">
                    Школа:
                    <div className="profile-block__ne-imput">
                        {school}
                    </div>
                </div>
            </div>
        </div>
    )
}