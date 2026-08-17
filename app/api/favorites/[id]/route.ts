import { NextRequest, NextResponse } from 'next/server'
import { api, ApiError } from '../../api'
import { cookies } from 'next/headers'

type Props = {
    params: Promise<{ id: string }>
}

export async function POST(request: NextRequest, { params }: Props) {
    const { id } = await params;
    const cookieStore = await cookies();

    try {
        const { data } = await api.post(
            `/favorites/${id}`,
            {},
            {
                headers: {
                    Cookie: cookieStore.toString(),
                },
            }
        )

        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json(
            {
                error:
                    (error as ApiError).response?.data?.message ??
                    (error as ApiError).message,
            },
            { status: (error as ApiError).status ?? 500 }
        )
    }
}

export async function DELETE(request: NextRequest, { params }: Props) {
    const { id } = await params;
    const cookieStore = await cookies();

    try {
        const { data } = await api.delete(
            `/favorites/${id}`,
            {
                headers: {
                    Cookie: cookieStore.toString(),
                },
            }
        )

        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json(
            {
                error:
                    (error as ApiError).response?.data?.message ??
                    (error as ApiError).message,
            },
            { status: (error as ApiError).status ?? 500 }
        )
    }
}
