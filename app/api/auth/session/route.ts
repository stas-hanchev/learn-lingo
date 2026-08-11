import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { api, ApiError } from '../../api'
import { splitCookiesString, parse as parseSetCookie } from 'set-cookie-parser'

export async function GET() {
    const cookieStore = await cookies()

    const accessToken = cookieStore.get('accessToken')?.value
    const refreshToken = cookieStore.get('refreshToken')?.value

    if (accessToken) {
        return NextResponse.json({ success: true })
    }

    if (!refreshToken) {
        return NextResponse.json({ success: false })
    }

    try {
        const apiRes = await api.get('auth/session', {
            headers: {
                Cookie: cookieStore.toString(),
            },
        })

        const setCookie = apiRes.headers['set-cookie']
        if (!setCookie) {
            return NextResponse.json({ success: false })
        }

        const cookieArray = Array.isArray(setCookie)
            ? setCookie
            : splitCookiesString(setCookie)
        const parsedCookies = parseSetCookie(cookieArray)

        for (const c of parsedCookies) {
            cookieStore.set(c.name, c.value, {
                expires: c.expires,
                path: c.path,
                maxAge: c.maxAge,
                httpOnly: c.httpOnly,
                secure: c.secure,
                sameSite: c.sameSite as 'lax' | 'strict' | 'none' | undefined,
            })
        }

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Session refresh failed:', (error as ApiError).message)
        return NextResponse.json({ success: false })
    }
}