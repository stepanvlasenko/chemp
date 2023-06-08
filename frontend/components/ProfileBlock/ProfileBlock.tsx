import { IUser } from '../../assets/ts/types'

import './ProfileBlock.css'

interface ProfileBlockProps {
    user: IUser
}

export default function ProfileBlock({
    user
}: ProfileBlockProps) {

    return (
        <div className="profile-block">
            <img className="profile-block__icon" src={user.avatarURL} />
            <div className="profile-block__info">
                <div>
                    <h2>Фамилия Имя Отчество:</h2>
                    <div className="profile-block__value">
                        {user.middleName} {user.firstName} {user.secondName}
                    </div>
                </div>
                <div>
                    <h2>Город проживания:</h2>
                    <div className="profile-block__value">
                        {user.city}
                    </div>    
                </div>
                <div>
                    <h2>Дата Рождения:</h2>
                    <div className="profile-block__value">
                        {user.birthDate}
                    </div>
                </div>
                <div>
                    <h2>Школа:</h2>
                    <div className="profile-block__value">
                        {user.school}
                    </div>
                </div>
            </div>
        </div>
    )
}