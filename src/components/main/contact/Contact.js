import React from 'react';
import styles from './Contact.module.scss'

const Contact = () => {
    return (
        <div className={styles.contact__container}>
            <h1 className='title'>Contact</h1>
            <p className={styles.contact__web}>contact@website.com</p>
            <p className={styles.contact__total}>+0 0000 0000</p>
            <ul className={styles.contact__menu}>
                <li className={styles.contact__item}> <a>Twitter</a> </li>
                <li className={styles.contact__item}> <a>LinkedIn</a> </li>
                <li className={styles.contact__item}> <a>Dribbble</a> </li>
                <li className={styles.contact__item}> <a>YouTube</a> </li>
                <li className={styles.contact__item}> <a>Instagram</a> </li>
                <li className={styles.contact__item}> <a>Facebook</a> </li>
            </ul>
        </div>
    );
};

export default Contact;