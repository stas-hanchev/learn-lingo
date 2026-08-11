// app/api/auth/login/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { api, ApiError } from '../../api'
import { splitCookiesString, parse as parseSetCookie } from 'set-cookie-parser'
import { cookies } from 'next/headers'

export async function POST(req: NextRequest) {
    const body = await req.json();
    try {
        const apiRes = await api.post('auth/login', body);
        const cookieStore = await cookies();
        const setCookie = apiRes.headers['set-cookie'];
        if (setCookie) {
            const cookieArray = Array.isArray(setCookie) ? setCookie : splitCookiesString(setCookie);
            const parsedCookies = parseSetCookie(cookieArray)

            for (const c of parsedCookies) {
                cookieStore.set(c.name, c.value, {
                    expires: c.expires,
                    path: c.path,
                    maxAge: c.maxAge,
                    httpOnly: c.httpOnly,
                    secure: c.secure,
                    sameSite: c.sameSite as 'lax' | 'strict' | 'none' | undefined,
                });
            }
            return NextResponse.json(apiRes.data);
        }

        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    } catch (error) {
        return NextResponse.json(
            {
                error:
                    (error as ApiError).response?.data?.error ??
                    (error as ApiError).message,
            },
            { status: (error as ApiError).status }
        )
    }
}
