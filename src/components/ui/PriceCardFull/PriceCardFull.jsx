import React from 'react'
import styles from "./priceCardFull.module.css"
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function PriceCardFull({title, pricingCardItems, price_btn }) {
  return (
    <section className={styles.pricingCard}>
    <div className="container">
      <h3>{title}</h3>
      <div className={styles.pricingCard__wrapper} style={{gridTemplateColumns:`repeat(${pricingCardItems.length}, 1fr)`}}>
        {pricingCardItems.map((item) => {
          return (
            <div key={item.id} className={styles.pricingCardItem}>
              <h4>{item.title}</h4>            
            
              <ReactMarkdown>
                {item.description}
              </ReactMarkdown>
              {item.img && <img src={item.img.data.attributes.url} alt={item.img.data.attributes.alternativeText} />}
              <h4>{item.price}</h4>
              <a className={styles.tel_btn} href="tel:(718)4900334">Call Now</a>
              <a className={styles.pickup_btn} href="https://speedyfreshlaundromat.curbsidelaundries.com/">Schedule a Pickup</a>
            </div>
          );
        })}
      </div>
      {price_btn && <div className={styles.pricingCardBottomBtn}>
          <p>Only $6 for a Laundry Bag!</p>
      </div>}
    </div>
  </section>
  )
}

export default PriceCardFull
