import React from 'react';
import styles from './Work.module.scss'
import {BsArrowRight} from 'react-icons/bs'


const WorkItems = ({data}) => {
    const {img, title,value} = data
    return (
        <div className={styles.work__item}>
            <img src={img} alt="" />
            <div className={styles.work__description}>
                <h2>{title}</h2>
                <p>{value}</p>
                <a href='#'>See Project <BsArrowRight/></a>
            </div>
        </div>
    );
};

export default WorkItems;