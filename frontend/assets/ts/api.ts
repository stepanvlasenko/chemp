import { $fetch } from 'ofetch'

export const useAPI = () => {
    const useUserAPI = () => userAPI
    return { useUserAPI }
}
const userAPI = {
    getUser: async (id: number) => {
        const responce = await $fetch('http://127.0.0.1:5000/user', {
            method: 'GET',
            params: {
                id,
            },
        })
        return responce
    },
    createUser: async (data: any) => {
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
}