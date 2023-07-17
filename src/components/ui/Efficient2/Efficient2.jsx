import React, { Fragment } from "react";



function Efficient2({title, items}) {
  return (
   
      <div className="efficient2">
      <div className="container">
        <h2>{title}</h2>
        
        <div className="efficient2-wrapper">
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
   
  )
}

export default Efficient2
