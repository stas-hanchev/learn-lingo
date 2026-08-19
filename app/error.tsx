'use client'

import { useEffect } from 'react'
import styles from './error.module.css';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className={styles.error_container}>
            <h2 className="text-xl font-semibold">Something went wrong</h2>
            <p className="text-gray-500">
                Try refreshing the page or coming back later.
            </p>
            <button
                onClick={() => reset()}
                className={styles.btn}
            >
                Try again
            </button>
        </div>
    )
}
