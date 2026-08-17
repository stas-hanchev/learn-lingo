import Image from 'next/image'

import { Teacher } from '@/lib/types'

import { FaStar } from 'react-icons/fa'
import styles from './TeacherCard.module.css'
import Link from 'next/link'

interface TeacherCardProps {
    teacher: Teacher;
    levelValue: string | undefined;
}

export default function TeacherCard({ teacher, levelValue }: TeacherCardProps) {
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
                <p className={styles.languages_info}>Speaks: <span className={styles.languages_values}>{teacher.languages.join(', ')}</span></p>
                <p className={styles.lessons_info}>Lesson Info: <span className={styles.lessons_info_value}>{teacher.lesson_info}</span></p>
                <p className={styles.conditions_info}>Conditions: <span className={styles.conditions_value}>{teacher.conditions.join(' ')}</span></p>
                <Link href={`/teachers/${teacher._id}`} className={styles.teacher_details_link}>Read more</Link>
                <div className={styles.levels_container}>
                    {teacher.levels.map(level => {
                        if (level === levelValue) {
                            return (<p key={level} className={`${styles.level_value} ${styles.desired_level}`}>{level}</p>)
                        } else {
                            return (<p key={level} className={styles.level_value}>{level}</p>);
                        }
                    })}
                </div>
            </div>
        </div>
    )
}
