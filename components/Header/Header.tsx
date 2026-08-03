import Link from 'next/link'

import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo_and_navigation}>
                    <Link href="/" className={styles.logo_link}>
                        <svg className={styles.logo} width="133" height="28">
                            <use href="/logo.svg"></use>
                        </svg>
                    </Link>
                    <div className={styles.navigation}>
                        <Link href="/" className={styles.navigation_link}>
                            Home
                        </Link>
                        <Link
                            href="/teachers"
                            className={styles.navigation_link}
                        >
                            Teachers
                        </Link>
                    </div>
                </div>
                <div className={styles.auth_links}>
                    <Link href="/login" className={styles.login_link}>
                      <svg className={styles.login_icon} width="20" height="20">
                        <use href="/sprite.svg#icon-log-in"></use>
                      </svg>
                        Log in
                    </Link>

                    <Link href="/register" className={styles.registration_link}>Registration</Link>
                </div>
            </div>
        </header>
    )
}
