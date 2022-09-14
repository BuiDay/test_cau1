import React from 'react';
import {BsArrowRight} from 'react-icons/bs'
import styles from './Services.module.scss'

const ServicesItem = ({data}) => {
    const{title, description, price} = data;
    return (
        <div className={styles.services__item}>
            <h2 className={styles.services__title}>{title}</h2>
            <p className={styles.services__description}>{description}</p>
            <a href="#">See Details <BsArrowRight/></a>
            <div className={styles.services__start}>
                <span>Starting at ${price}</span>
            </div>
        </div>
    );
};

export default ServicesItem;