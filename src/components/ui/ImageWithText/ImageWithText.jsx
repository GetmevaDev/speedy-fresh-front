import React from "react";

function ImageWithText({ img,img_alt, title, paragraph, listArr }) {
  return (

    <div className="container">
      <div className= "aboutBanner">
        
        <div className="aboutBanner__text">
          {title && <h2>{title}</h2>} 
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
