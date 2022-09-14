import React from 'react';
import styles from './OurTeam.module.scss'


const Member = ({data}) => {
    const {name, img, position} = data
    return (
        <div className={styles.ourteam__member}> 
            <img src={img} alt=""/>
                <div className={styles.ourteam__info}>
                    <h3 className={styles.ourteam__name}>{name}</h3>
                    <p className={styles.ourteam__position}>{position}</p>
                </div>
        </div>
    );
};

export default Member;