import React from "react";
import styles from "./priceTextBanner.module.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function PriceTextBanner({ title, subtitle, description, lists, bg }) {
  return (
    <div className="container">
      <div className={`${styles.priceTextBanner} ${bg && styles.bg}` }>
        {title && <h3 >{title}</h3>}
        {description && <p >{description}</p>} 
        {subtitle && <h4 >{subtitle}</h4>}
        {lists && <ReactMarkdown>{lists}</ReactMarkdown>} 

      </div>
    </div>
  );
}

export default PriceTextBanner;
