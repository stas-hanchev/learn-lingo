import axios from 'axios'

import {
    TeachersResponse,
    Teacher,
    RegisterRequestBody,
    User,
    LoginRequestBody,
    CheckSessionRequest,
} from '@/lib/types'

const nextServer = axios.create({
    baseURL: 'http://localhost:3000/api',
    withCredentials: true, // дозволяє axios працювати з cookie
})

export const getTeachers = async () => {
    const res = await nextServer.get<TeachersResponse>('/teachers')
    return res.data
}

export const getTeacherById = async (id: string) => {
    const res = await nextServer.get<Teacher>(`/teachers/${id}`)
    return res.data
}

export const getFavoriteTeachers = async () => {
    const res = await nextServer.get<TeachersResponse>('/favorites')
    return res.data
}

export const addFavoriteTeacher = async (teacherId: string) => {
    const res = await nextServer.post(`/favorites/${teacherId}`)
    return res.data
}

export const removeFavoriteTeacher = async (teacherId: string) => {
    const res = await nextServer.delete(`/favorites/${teacherId}`)
    return res.data
}

export const register = async (data: RegisterRequestBody) => {
    const res = await nextServer.post<User>('/auth/register', data)
    return res.data
}

export const login = async (data: LoginRequestBody) => {
    const res = await nextServer.post<User>('/auth/login', data)
    return res.data
}

export const checkSession = async () => {
    const res = await nextServer.get<CheckSessionRequest>('/auth/session')
    return res.data.success
}
