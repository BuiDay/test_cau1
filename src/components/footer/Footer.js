import React from 'react';
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer>
            <div className={styles.footer__right}>
                <p>2022 Creatives</p>
            </div>

            <div className={styles.footer__left}>   
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
            </div>
        </footer>
    );
};

export default Footer;