import { cookies } from 'next/headers'
import styles from './page.module.css'
import { getFavoriteTeachersWithoutProxy } from '@/lib/api';
import TeacherList from '@/components/TeacherList/TeacherList';
import NoTeachersFound from '@/components/NoTeachersFound/NoTeachersFound';

export default async function FavoritesPage() {
    const cookieStore = await cookies();
    const favoriteTeachers = await getFavoriteTeachersWithoutProxy({
        Cookie: cookieStore.toString(),
    })
    console.log(favoriteTeachers);

    return (
        <main className={styles.main}>
            <section className={styles.teachers_section}>
                <div className={styles.container}>
                    {favoriteTeachers.length > 0 ? (
                        <TeacherList
                            teachers={favoriteTeachers}
                        />
                    ) : (
                        <NoTeachersFound />
                    )}
                </div>
            </section>
        </main>
    )
}