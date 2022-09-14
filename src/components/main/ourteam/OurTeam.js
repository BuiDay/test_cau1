import React from 'react';
import Member from './Member';
import styles from './OurTeam.module.scss'
import { data } from '../../data/DataMember';

const OurTeam = () => {
    return (
        <div className={styles.ourteam__container}>
            <h1 className='title'>Our Team</h1>
            <p className={styles.ourteam__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

            <div className={styles.ourteam__members}>
                {
                    data.map((item,index)=>{
                        return(
                            <Member data={item} key={index} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default OurTeam;