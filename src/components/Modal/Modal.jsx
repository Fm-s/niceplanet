import React from 'react'
import PropTypes from 'prop-types';
import styles from './modal.module.css'

const Modal = ({closeFn, children}) => {
    const modalBackSizing = styles.modalBackSizing + " "
    return (
        <>
        <div onClick={closeFn} className={modalBackSizing + styles.modalBackdrop}></div>
        <div className={styles.mobalPage}>
            <div className={styles.modalHeader}>
                <div className={styles.headerLeft}>
                    <span className={styles.modalTitle}>Modal Title</span>
                </div>
                <div className={styles.headerRight}>
                    <button onClick={closeFn}>X</button>
                </div>
            </div>
            <div className={styles.modalFrame}>
                {children}
            </div>
        </div>
        </>
    )
}

Modal.propTypes = {
    closeFn: PropTypes.func,
    children: PropTypes.any
}

export default Modal