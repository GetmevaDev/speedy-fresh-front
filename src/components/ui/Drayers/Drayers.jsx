import React from "react";
import "../Drayers/drayers.css";

// function DryersCard({img, title, text}) {
//   return (
//     <div className='dryers__card'>
//         <img loading="lazy" src={img} alt ={title} />
//         <h4>{title}</h4>
//         <p>{text}</p>
//     </div>
//   )
// }
function Drayers({ title, items }) {
  return (
    <div className="dryers">
      <div className="container">
        <h3>{title}</h3>
        <div className="dryers__card-wrapper">
          {items?.map((item) => {
            return (
              <div className="dryers__card" key={item.id}>
                <img
                  loading="lazy"
                  src={item?.Image?.data?.attributes?.url}
                  alt={item?.Image?.data?.attributes?.alternativeText}
                />
                <h4>{item?.title}</h4>
                <p>{item?.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Drayers;
