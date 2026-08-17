import styles from './page.module.css'
import { getFavoriteTeachers } from '@/lib/api';
import TeacherList from '@/components/TeacherList/TeacherList';
import NoTeachersFound from '@/components/NoTeachersFound/NoTeachersFound';

export default async function FavoritesPage() {
    const favoriteTeachers = await getFavoriteTeachers();
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