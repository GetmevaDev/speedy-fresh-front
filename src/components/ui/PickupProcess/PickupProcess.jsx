import React, { Fragment } from 'react'
function PickupProcess({title, items}) {
  return (
    <section className="pickUpProcess ">
      
        <div className="container">
          <h2>{title}</h2>
          <div className="pickUpProcess__card-wrapper">
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
        </div>
      </section>
  )
}

export default PickupProcess
