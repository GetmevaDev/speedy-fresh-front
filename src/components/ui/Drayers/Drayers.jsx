import React from "react";


function Drayers({ title, items }) {
  return (
    <div className="dryers">
      <div className="container">
        <h2>{title}</h2>
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
