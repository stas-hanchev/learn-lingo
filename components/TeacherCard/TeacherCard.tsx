import Image from 'next/image'

import { Teacher } from '@/lib/types'

import { FaStar } from 'react-icons/fa'
import styles from './TeacherCard.module.css'

interface TeacherCardProps {
    teacher: Teacher
}

export default function TeacherCard({ teacher }: TeacherCardProps) {
    return (
        <div className={styles.teacher_container}>
            <div className={styles.teacher_avatar_container}>
                <Image
                    src={teacher.avatar_url}
                    width={96}
                    height={96}
                    alt={`Teacher ${teacher.name}'s avatar.`}
                    className={styles.teacher_avatar}
                ></Image>
            </div>

            <div className={styles.card_info_part}>
                <div className={styles.heading}>
                    <p className={styles.languages}>Languages</p>
                    <ul className={styles.characteristics_list}>
                        <li className={styles.lessons_format}>
                            <div className={styles.characteristic_container}>
                                <svg
                                    className={styles.book_icon}
                                    width={16}
                                    height={16}
                                >
                                    <use href="/sprite.svg#icon-book"></use>
                                </svg>
                                <p className={styles.characteristic_text}>
                                    Lessons online
                                </p>
                            </div>
                        </li>
                        <li className={styles.lessons_done}>Lessons done: {teacher.lessons_done}</li>
                        <li>
                            <div className={styles.rating_container}>
                                <FaStar
                                    className={styles.star}
                                    aria-hidden="true"
                                />
                                <p className={styles.rating}>Rating: {teacher.rating}</p>
                            </div>
                        </li>
                        <li>
                            <p className={styles.price}>Price / 1 hour: <span className={styles.price_value}>30$</span></p>
                        </li>
                    </ul>
                </div>
                <p className={styles.teacher_name}>{teacher.name} {teacher.surname}</p>
            </div>
        </div>
    )
}
