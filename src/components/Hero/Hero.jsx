import React from "react";
import styles from "./Hero.module.css";
import HeroImgUrl from '../../assets/hero.png'

const Hero = () => {

  const containerStyles = `${styles['hero-inner']} container`

  return (
    <section className={styles.hero}>
      <div className={containerStyles}>
        <div>
          <h2>Our Restaurant</h2>
          <p>
            Sushidaily is a warm and appealing intimate space in central
            Amsterdam. You will find a wide variety of dishes, including your
            favorite classics and our specials. All dishes are prepared by
            our experienced chefs, using only fresh and high-quality
            ingredients from the best sources.
          </p>
          <p>
            We at Sushidaily are proud of the food we serve and we aspire to
            bring you the best dining experience you can imagine.
          </p>
          <a href="#menu" className="btn btn-primary">View Menu</a>
        </div>
        <img src={HeroImgUrl} className={styles['hero-img']} alt="A close-up picture of sushi" />
      </div>
    </section>
  );
};

export default Hero;
