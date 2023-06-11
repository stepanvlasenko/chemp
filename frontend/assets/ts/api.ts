import { $fetch } from 'ofetch'
import { IComment, IPost, IUser, RawComment, RawPost, RawUser } from './types'

export const useAPI = () => {
    const useUserAPI = () => userAPI
    const usePostAPI = () => postAPI
    const useCommentAPI = () => commentAPI
    const useAuthenticationAPI = () => authenticationAPI
    return { useUserAPI, usePostAPI, useCommentAPI, useAuthenticationAPI }
}
const userAPI = {
    getUser: async (id: number) => {
        const responce = await $fetch<IUser>('http://127.0.0.1:5000/user', {
            method: 'GET',
            params: {
                id,
            },
        })
        return responce
    },
    createUser: async (data: RawUser) => {
        const responce = await $fetch('http://127.0.0.1:5000/user', {
            method: 'POST',
            body: data,
        })
        return responce
    },
    updateUser: async (id: number, data: any) => {
        const responce = await $fetch('http://127.0.0.1:5000/user', {
            method: 'PUT',
            params: {
                id,
            },
            body: data,
        })
        return responce
    },
    deleteUser: async (id: number) => {
        const responce = await $fetch('http://127.0.0.1:5000/user', {
            method: 'DELETE',
            params: {
                id,
            },
        })
        return responce
    },
    getPosts: async (id: number) => {
        const responce = await $fetch<IPost[]>('http://127.0.0.1:5000/user/posts', {
            method: 'GET',
            params: {
                id,
            },
        })
        return responce
    }
}

const postAPI = {
    getAll: async () => {
        const responce = await $fetch<IPost[]>('http://127.0.0.1:5000/post/all', {
            method: 'GET'
        })
        return responce
    },
    getPost: async (id: number) => {
        const responce = await $fetch<IPost>('http://127.0.0.1:5000/post', {
            method: 'GET',
            params: {
                id,
            },
        })
        return responce
    },
    createPost: async (data: RawPost) => {
        const responce = await $fetch('http://127.0.0.1:5000/post', {
            method: 'POST',
            body: data,
        })
        return responce
    },
    updatePost: async (id: number, data: any) => {
        const responce = await $fetch('http://127.0.0.1:5000/post', {
            method: 'PUT',
            params: {
                id,
            },
            body: data,
        })
        return responce
    },
    deletePost: async (id: number) => {
        const responce = await $fetch('http://127.0.0.1:5000/post', {
            method: 'DELETE',
            params: {
                id,
            },
        })
        return responce
    },
    getComments: async (id: number) => {
        const responce = await $fetch<IComment[]>('http://127.0.0.1:5000/post/comments', {
            method: 'GET',
            params: {
                id,
            },
        })
        return responce
    }
}

const commentAPI = {
    getComment: async (id: number) => {
        const responce = await $fetch<IComment>('http://127.0.0.1:5000/comment', {
            method: 'GET',
            params: {
                id,
            },
        })
        return responce
    },
    createComment: async (data: RawComment) => {
        const responce = await $fetch('http://127.0.0.1:5000/comment', {
            method: 'POST',
            body: data,
        })
        return responce
    },
    updateComment: async (id: number, data: any) => {
        const responce = await $fetch('http://127.0.0.1:5000/comment', {
            method: 'PUT',
            params: {
                id,
            },
            body: data,
        })
        return responce
    },
    deleteComment: async (id: number) => {
        const responce = await $fetch('http://127.0.0.1:5000/comment', {
            method: 'DELETE',
            params: {
                id,
            },
        })
        return responce
    },
}

const authenticationAPI = {
    authenticate: async (email: string, password: string) => {
        const responce = await $fetch('http://127.0.0.1:5000/authentication', {
            method: 'GET',
            params: {
                email,
                password
            },
        })
        return responce
    }
}