import styles from './loading.module.css';

export default function Loading() {
    return (
        <div className={styles.backdrop}>
            <div className={styles.loaderBox} role="status" aria-live="polite">
                <span className={styles.spinner} />

                <p className={styles.title}>Loading...</p>

                <p className={styles.description}>
                    Please wait while we fetch data for you
                </p>
            </div>
        </div>
    )
}
