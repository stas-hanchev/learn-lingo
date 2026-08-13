'use client'

import { checkSession, getMe } from '@/lib/api'
import { useAuthStore } from '@/lib/store/authStore'
import { useEffect } from 'react'

type Props = {
    children: React.ReactNode
}

const AuthProvider = ({ children }: Props) => {
    const setUser = useAuthStore((state) => state.setUser)
    const clearIsAuthenticated = useAuthStore(
        (state) => state.clearIsAuthenticated
    )

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const isAuthenticated = await checkSession()
                if (isAuthenticated) {
                    const user = await getMe()
                    setUser(user)
                } else {
                    clearIsAuthenticated()
                }
            } catch (error) {
                console.error('Failed to restore session:', error)
                clearIsAuthenticated()
            }
        }

        fetchUser()
    }, [setUser, clearIsAuthenticated])

    return children
}

export default AuthProvider
