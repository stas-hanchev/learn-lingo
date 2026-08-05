"use client";

import Link from "next/link";

import styles from "./AuthNavigation.module.css";

import { useState } from "react";
import Modal from "../Modal/Modal";

export default function AuthNavigation() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

    const openLoginModal = () => setIsLoginModalOpen(true);
    const closeLoginModal = () => setIsLoginModalOpen(false);

    const openRegistrationModal = () => setIsRegistrationModalOpen(true);
    const closeRegistrationModal = () => setIsRegistrationModalOpen(false);

    return (
        <div className={styles.auth_links}>
            <button type="button" className={styles.login_button} onClick={openLoginModal}>
                <svg className={styles.login_icon} width="20" height="20">
                    <use href="/sprite.svg#icon-log-in"></use>
                </svg>
                Log in
            </button>

            {isLoginModalOpen && (
                <Modal
                    onClose={closeLoginModal}
                >
                    <h2 className={styles.heading}>Log in</h2>
                    <p className={styles.description}>Welcome back! Please enter your credentials to access your account and continue your search for an teacher.</p>
                </Modal>

            )}

            <button type="button" className={styles.registration_button} onClick={openRegistrationModal}>
                Registration
            </button>

            {isRegistrationModalOpen && (
                <Modal
                    onClose={closeRegistrationModal}
                >
                    <h2 className={styles.heading}>Registration</h2>
                    <p className={styles.description}>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.</p>
                </Modal>
            )}
        </div>
    )
}
