export interface IUser {
    id: number
    email: string
    firstName: string
    secondName: string
    middleName: string
    birthDate: string
    city: string
    school: string
    avatarURL: string
}
export type RawUser  = Omit<IUser, 'id'> & {
    password: string
}

export interface IPost {
    id: number
    userId: number
    title: string
    content: string
    publishDate: string
    imageURL: string
}
export type RawPost  = Omit<IPost, 'id'>

export interface IComment {
    id: number
    userId: number
    postId: number
    content: string
    publishDate: string
    imageURL: string
}
export type RawComment  = Omit<IComment, 'id'>