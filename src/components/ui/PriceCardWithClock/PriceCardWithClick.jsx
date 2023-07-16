import React from 'react'
import styles from "./priceCardWithClock.module.css"
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
function PriceCardWithClick({title, items}) {
  return (
    <section className={styles.pricingCard}>
    <div className="container">
      <h3>{title}</h3>
      <div className={styles.pricingCard__wrapper}>
        {items.map((item) => {
          return (
            <div key={item.id} className={styles.pricingCardItem}>
              <h4>{item.title}</h4>            
            
              <ReactMarkdown>
                {item.time}
              </ReactMarkdown>
              {item.img && <img src={item.img.data.attributes.url} alt={item.img.data.attributes.alternativeText} />}
              <h4>{item.price}</h4>
              <a className={styles.tel_btn} href="tel:(718)4900334">Call Now</a>
              <a className={styles.pickup_btn} href="https://speedyfreshlaundromat.curbsidelaundries.com/">Schedule a Pickup</a>
            </div>
          );
        })}
      </div>
     
    </div>
  </section>
  )
}

export default PriceCardWithClick
