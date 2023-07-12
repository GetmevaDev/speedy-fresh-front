import React from "react";

import "../HomePriceBanner/homePriceBanner.css"
// import BannerImg from "../images/home-price.png"
import Link from "next/link";
function HomePriceBanner({title, description, btn_title, btn_link, image}) {
  return (
    <div className="container">
      <div className="homePriceBanner-grid">
        <div className="homePriceBanner__content">
          <h3>{title}</h3>
          <p>{description}</p>
          <Link href= {btn_link} className = "btn btn--secondary">{btn_title}</Link>
          
        </div>
        <div className="homePriceBanner__image">
          <img loading="lazy" src={image} alt="washing machine"/>
        </div>
      </div>

    </div>
  )
}

export default HomePriceBanner
