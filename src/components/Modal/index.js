import React from 'react'
import styles from './_modal.module.scss';

import closeImage from '../../assets/images/close.svg';

const Modal = ({ handleClose, content }) => {
    return (
        <>
            <div className={styles.overlay}></div>
            <div className={styles.modal}>
                <button className={styles.close} onClick={handleClose}>
                    <img src={closeImage} alt="close Modal" />
                </button>
                <h1 className={styles.heading}>
                    {content.heading}
                </h1>
                <div className={styles.paragraphs}>
                    {
                        content.paragraphs.map((p, index) => {
                            return <p key={index} className={styles.paragraph}>{p}</p>
                        })
                    }
                </div>
                <a href={content.link} className={styles.button}>
                    BUY NOW for ${content.price}
                </a>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={content.image} alt={content.heading} />
                </div>
            </div>
        </>
    )
}

export default Modal
