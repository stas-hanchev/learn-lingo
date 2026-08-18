import styles from './LiteralAvatar.module.css'

interface LiteralAvatarProps {
    name: string
}

export default function LiteralAvatar({ name }: LiteralAvatarProps) {
    return (
        <div className={styles.avatar}>
            <p className={styles.letter}>{name.slice(0, 1).toUpperCase()}</p>
        </div>
    )
}
