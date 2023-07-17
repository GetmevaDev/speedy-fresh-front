import React from "react";



function BenefitsCard({ img, title, description }) {
  return (
    <div className="BenefitsCard">
      <img loading="lazy" src={img} alt={title} />
      <h4>{title}</h4>
      <span>{description}</span>
    </div>
  );
}
export default function Benefits({bg_img, title, subtitle, ourBenefitsCardArr}) {
  return (
    <div className="benefits" style={{backgroundImage: `url(${bg_img})`}}>
      <h2>{title}</h2>
      <p className="benefits__subtitle">{subtitle}</p>
      <div className="benefitsCard-wrappper container">
        {ourBenefitsCardArr.map((item)=> {
          return(
            <BenefitsCard
              key={item.id}
              img={item.image.data.attributes.url} 
              title={item.title}
              description= {item.subtitle}
            />
          )
        })}
       
      </div>
    </div>
  );
}
