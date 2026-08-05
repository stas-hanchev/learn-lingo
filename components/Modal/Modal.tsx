// src/components/Modal.tsx

import { createPortal } from 'react-dom'
import css from './Modal.module.css'
import { useEffect } from 'react'

type ModalMode = 'login' | 'registration'

interface ModalProps {
    mode: ModalMode
    heading: string
    description: string
    onClose: () => void
}

export default function Modal({
    mode,
    heading,
    description,
    onClose,
}: ModalProps) {
    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClose()
        }
    }

    useEffect(() => {
	  const handleKeyDown = (e: KeyboardEvent) => {
	    if (e.key === "Escape") {
	      onClose();
	    }
	  };
	
	  document.addEventListener("keydown", handleKeyDown);
	
	  return () => {
	    document.removeEventListener("keydown", handleKeyDown);
	  };
	}, [onClose]);

    return createPortal(
        <div
            className={css.backdrop}
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
        >
            <div className={css.modal}>
                <button
                    className={css.closeButton}
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    &times;
                </button>

                <h2 className={css.heading}>{heading}</h2>
                <p className={css.description}>{description}</p>
            </div>
        </div>,
        document.body
    )
}
