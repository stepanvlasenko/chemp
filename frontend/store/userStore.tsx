import { create } from 'zustand'
import { IUser } from '../assets/ts/types'

interface UserStore {
    user: IUser | null
    setUser: (user: IUser) => void
}

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    setUser: (user) => {
        set(() => ({
            user: user
        }))
    }
}))