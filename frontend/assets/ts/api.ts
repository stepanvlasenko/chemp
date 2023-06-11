import { $fetch } from 'ofetch'
import { IComment, IPost, IUser, RawComment, RawPost, RawUser } from './types'

const serverURL = 'http://127.0.0.1:5000'

export const useAPI = () => {
    const useUserAPI = () => userAPI
    const usePostAPI = () => postAPI
    const useCommentAPI = () => commentAPI
    const useAuthenticationAPI = () => authenticationAPI
    return { useUserAPI, usePostAPI, useCommentAPI, useAuthenticationAPI }
}
const userAPI = {
    getUser: async (id: number) => {
        const responce = await $fetch<IUser>(`${serverURL}/user`, {
            method: 'GET',
            params: {
                id,
            },
        })
        return responce
    },
    createUser: async (data: RawUser) => {
        const responce = await $fetch(`${serverURL}/user`, {
            method: 'POST',
            body: data,
        })
        return responce
    },
    updateUser: async (id: number, data: any) => {
        const responce = await $fetch(`${serverURL}/user`, {
            method: 'PUT',
            params: {
                id,
            },
            body: data,
        })
        return responce
    },
    deleteUser: async (id: number) => {
        const responce = await $fetch(`${serverURL}/user`, {
            method: 'DELETE',
            params: {
                id,
            },
        })
        return responce
    },
    getPosts: async (id: number) => {
        const responce = await $fetch<IPost[]>(`${serverURL}/user/posts`, {
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
        const responce = await $fetch<IPost[]>(`${serverURL}/post/all`, {
            method: 'GET'
        })
        return responce
    },
    getPost: async (id: number) => {
        const responce = await $fetch<IPost>(`${serverURL}/post`, {
            method: 'GET',
            params: {
                id,
            },
        })
        return responce
    },
    createPost: async (data: RawPost) => {
        const responce = await $fetch(`${serverURL}/post`, {
            method: 'POST',
            body: data,
        })
        return responce
    },
    updatePost: async (id: number, data: any) => {
        const responce = await $fetch(`${serverURL}/post`, {
            method: 'PUT',
            params: {
                id,
            },
            body: data,
        })
        return responce
    },
    deletePost: async (id: number) => {
        const responce = await $fetch(`${serverURL}/post`, {
            method: 'DELETE',
            params: {
                id,
            },
        })
        return responce
    },
    getComments: async (id: number) => {
        const responce = await $fetch<IComment[]>(`${serverURL}/post/comments`, {
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
        const responce = await $fetch<IComment>(`${serverURL}/comment`, {
            method: 'GET',
            params: {
                id,
            },
        })
        return responce
    },
    createComment: async (data: RawComment) => {
        const responce = await $fetch(`${serverURL}/comment`, {
            method: 'POST',
            body: data,
        })
        return responce
    },
    updateComment: async (id: number, data: any) => {
        const responce = await $fetch(`${serverURL}/comment`, {
            method: 'PUT',
            params: {
                id,
            },
            body: data,
        })
        return responce
    },
    deleteComment: async (id: number) => {
        const responce = await $fetch(`${serverURL}/comment`, {
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
        const responce = await $fetch(`${serverURL}/authentication`, {
            method: 'GET',
            params: {
                email,
                password
            },
        })
        return responce
    }
}