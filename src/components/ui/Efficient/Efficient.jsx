import React, { Fragment } from "react";
import "../Efficient/efficient.css";


function Efficient({title, description, items}) {
  return (
    <div className="efficient">
      <div className="container">
       {title && <h3>{title}</h3>}
       {description && <p>  {description}  </p>}
        <div className="efficient-wrapper">
          {items?.map((item, index)=>{
            return(
              <Fragment key={item.id} >
              <div  className="roundIcon-wrapper">
                  <div className="roundIcon">
                    <img loading="lazy" src={item?.image?.data?.attributes?.url} alt="icon"/>
                  </div>
                  {item.title && <span>{item.title}</span>}
              </div>  
              {index !== items.length - 1 && <img className="arrow" src="/images/right_arrow.svg" alt="icon" />}
              </Fragment>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Efficient;
