import './PostUserInfo.css'

interface PostUserInfoProps {
    imageURL: string
    secondName: string
    firstName: string
    middleName: string
    date: string
}

export default function PostUserInfo({
    date,
    firstName,
    imageURL,
    middleName,
    secondName,
}:PostUserInfoProps) {

    return (
        <div className="post-user-info">
            <div className="post-user-info__info">
                <img className="post-user-info__icon" src={imageURL}  />
                <div className="post-user-info__fio">
                    {secondName} {firstName} {middleName}
                </div>
            </div>
            <div className="post-user-info__date">
                {date}
            </div>
        </div>
    )
}