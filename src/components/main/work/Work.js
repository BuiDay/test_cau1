import React from 'react';
import styles from './Work.module.scss'
import WorkItems from './WorkItems';
import {data} from '../../data/DataWork'

const Work = () => {
    return (
        <div className={styles.work__container}>
            <h1 className="title">Work</h1>
            <div className={styles.work__content}>
                {
                    data.map((item,index)=>{
                        return(
                            <WorkItems data={item} key={index} />   
                        )
                    })
                   
                }    
                <button className={styles.work__btn}>See All</button>
            </div>
        </div>
    );
};

export default Work;