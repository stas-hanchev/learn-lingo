import { NextRequest, NextResponse } from 'next/server'
import { api, ApiError } from '../api'

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams

    try {
        const { data } = await api.get('/teachers', {
            params: Object.fromEntries(searchParams),
        })

        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json(
            {
                error:
                    (error as ApiError).response?.data?.message ??
                    (error as ApiError).message,
            },
            { status: (error as ApiError).status }
        )
    }
}