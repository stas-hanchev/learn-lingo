import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.backdrop}>
      <div className={styles.loaderBox} role="status" aria-live="polite">
        <span className={styles.spinner} />

        <p className={styles.title}>Loading teachers...</p>

        <p className={styles.description}>
          Please wait while we fetch the best teachers for you
        </p>
      </div>
    </div>
  );
}