'use client'

import { getTeachers } from '@/lib/api'
import {
    TeachersResponse,
    Teacher,
    SelectFilters
} from '@/lib/types'

import styles from './page.module.css'
import { useEffect, useState } from 'react'
import TeacherFilter from '@/components/TeacherFilter/TeacherFilter'

export default function TeachersPage() {
    const [teachers, setTeachers] = useState<TeachersResponse | null>(null)
    const [filters, setFilters] = useState<SelectFilters | null>(null)

    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const teachers = await getTeachers()
                if (teachers) {
                    setTeachers(teachers)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchTeachers()
    }, [filters])

    return (
        <main className={styles.main}>
            <section className={styles.teachers_section}>
                <div className={styles.container}>
                    <TeacherFilter onChange={setFilters}></TeacherFilter>
                </div>
            </section>
        </main>
    )
}
