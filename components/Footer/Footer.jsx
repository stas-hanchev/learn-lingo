import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.blocks_container}>
                    <div className={styles.footer_block}>
                        <p className={styles.number}>32,000 +</p>
                        <p className={styles.description}>Experienced<br/>tutors</p>
                    </div>
                    <div className={styles.footer_block}>
                        <p className={styles.number}>300,000 +</p>
                        <p className={styles.description}>5-star tutor<br/>reviews</p>
                    </div>
                    <div className={styles.footer_block}>
                        <p className={styles.number}>120 +</p>
                        <p className={styles.description}>Subjects<br/>taught</p>
                    </div>
                    <div className={styles.footer_block}>
                        <p className={styles.number}>200 +</p>
                        <p className={styles.description}>Tutor<br/>nationalities</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
