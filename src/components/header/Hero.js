import React from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero__container}>
      <div className={styles.hero__top}>
        <p className={styles.hero__title}>Creative</p>
        <p className={styles.hero__title}>Innovative</p>
        <p className={styles.hero__title}>Design Agency</p>
      </div>
      <div className={styles.hero__under}>
        <p className={styles.hero__content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        </p>
      </div>
    </div>
  );
};

export default Hero;
