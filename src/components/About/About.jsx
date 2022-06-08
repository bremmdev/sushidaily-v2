import React from 'react'
import styles from './About.module.css'
import ChefImgUrl from '../../assets/chef.png'
import QuoteIcon from '../UI/Icons/QuoteIcon.jsx';

const About = () => {

  return (
    <section className={styles.about}>
      <div className="container">
        <h2>The Chef</h2>
        <div className={styles['about-inner']}>
        <div>
          <img
            src={ChefImgUrl}
            className={styles["about-img"]}
            alt="Chef Hiroshi Tanaka"
          />
        </div>
        <div className={styles["about-description"]}>
          <p>
            Chef Tanaka is an excellent chef of Japanese cuisine with 25 years
            of experience specializing in fresh seafood. After working for many
            years in Tokyo, Japan, Chef Tanaka has achieved his dream of having
            his own restaurant.
          </p>
          <figure>
            <blockquote className="flex">
              <QuoteIcon className={styles["quote-icon"]} />
              <p>
                "Creating beautiful dishes that awe my customers is my greatest
                passion."
              </p>
            </blockquote>
            <figcaption>Hiroshi Tanaka</figcaption>
          </figure>
        </div>
        </div>

      </div>
    </section>
  );
};

export default About