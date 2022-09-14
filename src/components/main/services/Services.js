import React from 'react';
import styles from './Services.module.scss'
import ServicesItem from './ServicesItem';
import {data} from '../../data/DataServices'



const Services = () => {
    return (
        <div className={styles.services__container}>
            <h1 className="title">Services</h1>
            <div className={styles.services__content}>
                {
                    data.map((item,index)=>{
                        return(
                            <ServicesItem data={item} key={index} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Services;