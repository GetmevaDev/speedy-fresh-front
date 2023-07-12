
import React from 'react'
import styles from  '../Hero/hero.module.css'

function Hero({title, subtitle, image, callBtnText, callBtnUrl, pickupBtnText, pickupBtnUrl}) {
  return (
    <section className={styles.heroSection}>
      <div className="container ">
      <div className={styles.hero}>
        <div className={styles.hero__content}>  
          {title && <h2>{title}</h2>}
          {subtitle && <h4>{subtitle}</h4>}
          <div className={styles.hero__cta}>
            <a href={pickupBtnUrl} className={`${styles.btn} ${styles.btn_primary}`}>
              {pickupBtnText}
            </a>
            <a href={callBtnUrl} className={`${styles.btn} ${styles.btn_secondary}`}>
              {callBtnText}
            </a>
          </div>
        </div>
        <div className={styles.hero__image}>
        <img src={image} alt="logo" loading='lazy'  />
        </div>
      </div>

      
    </div>
    </section>
  )
}

export default Hero
