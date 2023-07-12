import React, { Fragment } from "react";
import "../WashProcess/washProcess.css";


function WashProcess({ title, items }) {
  return (
    <section className="washProcces container">
      <h3>{title}</h3>
      <div className="washProcess__card-wprapper">
        {items?.map((item, index) => {
          return (
            <Fragment key={item.id}>
              <div className="washCard" >
                <img
                  loading="lazy"
                  src={item.image.data.attributes.url}
                  alt={item.image.data.attributes.alternativeText}
                />
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
              {index !== items.length - 1 && (
                <img
                  className="arrow-right-full"
                  src="/images/right_arrow-full.svg"
                  alt="arrow"
                  loading="lazy"
                />
              )}
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}

export default WashProcess;
