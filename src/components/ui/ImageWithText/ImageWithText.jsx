import React from "react";
import "../ImageWithText/imageWithText.css";

function ImageWithText({ img,img_alt, title, paragraph, listArr }) {
  return (

    <div className="container">
      <div className= "aboutBanner">
        
        <div className="aboutBanner__text">
          {title && <h3>{title}</h3>} 
          {paragraph && <p>{paragraph}</p>}
          {listArr &&
          <ul>
            {listArr.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>}
        </div>
        <div className="aboutBanner__img">
          <img loading="lazy" src={img} alt={img_alt} />
        </div>
        
      </div>
    </div>
   
  );
}

export default ImageWithText;
