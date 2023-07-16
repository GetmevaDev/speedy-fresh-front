import React from "react";
import styles from "../PricingCard/pricingCard.module.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function PricingCard({ title, pricingCardItems }) {
  
  return (
    <section className={styles.pricingCard}>
      <div className="container">
        <h3>{title}</h3>
        <div className={styles.pricingCard__wrapper}>
          {pricingCardItems.map((item) => {
            return (
              <div key={item.id} className={styles.pricingCardItem}>
                <h4>{item.title}</h4>
                <div className={styles.pricingCardItem__img}>
                <img
                  loading="lazy"
                  src={item?.image?.data?.attributes?.url}
                  alt={item?.image?.data?.attributes?.alternativeText}
                />
                </div>
              
                <ReactMarkdown>
                  {item.description}
                </ReactMarkdown>
                <h4>{item.price}</h4>
                <a className={styles.tel_btn} href="tel:(718)4900334">Call Now</a>
                <a className={styles.pickup_btn} href="https://speedyfreshlaundromat.curbsidelaundries.com/">Schedule a Pickup</a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PricingCard;
