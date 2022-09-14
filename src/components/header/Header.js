import React, { useState } from 'react';
import logo from '../../assets/logo.svg'
import styles from './Header.module.scss';
import Hero from './Hero'
import {VscThreeBars} from 'react-icons/vsc'


const Header = () => {

    const [show, setShow] = useState(false)
    
    const handleShow = () =>{
        setShow(!show)
    }

    console.log(show)

    
    return (
        <header>
            <nav>
                <div className={styles.header__logo}>
                    LOGO
                </div>

                <div className={styles.header__icon}> <VscThreeBars onClick={()=>handleShow()}/> </div>

                <div className={`${styles.header__menu} ${show ? styles.showMenu : ""}`}>
                    <a href="#" className={styles.header__menu__item}>work</a>
                    <a href="#" className={styles.header__menu__item}>services</a>
                    <a href="#" className={styles.header__menu__item}>contact</a>
                </div>
            </nav>
           <Hero />
        </header>
        
    );
};

export default Header;