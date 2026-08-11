'use client'

import { RegisterRequestBody, LoginRequestBody } from '@/lib/types'
import { FormikHelpers } from 'formik'

import styles from './AuthNavigation.module.css'

import { useState } from 'react'
import Modal from '../Modal/Modal'
import RegistrationForm from '../Forms/RegistrationForm/RegistrationForm'
import LoginForm from '../Forms/LoginForm/LoginForm'
import { login, register, logout } from '@/lib/api'

import { useAuthStore } from '@/lib/store/authStore'
// import { useRouter } from 'next/navigation'

export default function AuthNavigation() {
    // const router = useRouter()
    const { isAuthenticated, user } = useAuthStore()

    const setUser = useAuthStore((state) => state.setUser);

    const clearIsAuthenticated = useAuthStore(
        (state) => state.clearIsAuthenticated
    );

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
    const [isRegistrationModalOpen, setIsRegistrationModalOpen] =
        useState(false)

    const openLoginModal = () => setIsLoginModalOpen(true)
    const closeLoginModal = () => setIsLoginModalOpen(false)

    const openRegistrationModal = () => setIsRegistrationModalOpen(true)
    const closeRegistrationModal = () => setIsRegistrationModalOpen(false)

    const handleRegistrationSubmit = async (
        values: RegisterRequestBody,
        actions: FormikHelpers<RegisterRequestBody>
    ) => {
        try {
            const response = await register(values);
            setUser(response);

            if (response._id) {
                alert(
                    `User named ${response.name} has been successfully registered!`
                )
                actions.resetForm()
            }
        } catch (error) {
            console.error(error)
            alert(`Oops, error occured(`)
        } finally {
            actions.setSubmitting(false)
        }
    }

    const handleLoginSubmit = async (
        values: LoginRequestBody,
        actions: FormikHelpers<LoginRequestBody>
    ) => {
        try {
            const response = await login(values)
            setUser(response);
            
            if (response._id) {
                alert(
                    `User named ${response.name} has been successfully logged in!`
                )
                actions.resetForm()
            }
        } catch (error) {
            console.error(error)
            alert(`Oops, error occured(`)
        } finally {
            actions.setSubmitting(false)
        }
    }

    const handleLogout = async () => {
        await logout();
        clearIsAuthenticated();
        // router.push('/sign-in');
    }

    return !isAuthenticated ? (
        <div className={styles.auth_links}>
            <button
                type="button"
                className={styles.login_button}
                onClick={openLoginModal}
            >
                <svg className={styles.login_icon} width="20" height="20">
                    <use href="/sprite.svg#icon-log-in"></use>
                </svg>
                Log in
            </button>

            {isLoginModalOpen && (
                <Modal onClose={closeLoginModal}>
                    <h2 className={styles.heading}>Log in</h2>
                    <p className={styles.description}>
                        Welcome back! Please enter your credentials to access
                        your account and continue your search for an teacher.
                    </p>
                    <LoginForm onSubmit={handleLoginSubmit}></LoginForm>
                </Modal>
            )}

            <button
                type="button"
                className={styles.registration_button}
                onClick={openRegistrationModal}
            >
                Registration
            </button>

            {isRegistrationModalOpen && (
                <Modal onClose={closeRegistrationModal}>
                    <h2 className={styles.heading}>Registration</h2>
                    <p className={styles.description}>
                        Thank you for your interest in our platform! In order to
                        register, we need some information. Please provide us
                        with the following information.
                    </p>
                    <RegistrationForm
                        onSubmit={handleRegistrationSubmit}
                    ></RegistrationForm>
                </Modal>
            )}
        </div>
    ) : (
        <div className={styles.auth_links}>
            <p className={styles.username}>{user?.name}</p>
            <button className={styles.logout_button} onClick={handleLogout}>Log Out</button>
        </div>
    )
}
