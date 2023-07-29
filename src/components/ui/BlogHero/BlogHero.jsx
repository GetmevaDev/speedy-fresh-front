import React, { Fragment } from 'react'
import styles from "./blogHero.module.css"

function BlogHero({title,  image, callBtnText, callBtnUrl, pickupBtnText, pickupBtnUrl}) {
  return (
    <Fragment>
    <section className={styles.blogHero}  style={{ backgroundImage: `url(${image})` }}>
      <div className="container">
 
          <h1 >{title}</h1>
        {callBtnText &&
          <div className={styles.cta__wrapper}>
            <a className={styles.pickup} href={pickupBtnUrl}>{pickupBtnText}</a>
            <a className={styles.phone} href={callBtnUrl}>{callBtnText}</a>
          </div>
           }
     

      </div>     
    </section>
    <div className={styles.marginTop}></div>
    </Fragment>
  )
}

export default BlogHero
