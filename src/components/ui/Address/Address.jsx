import React from 'react'

import '../Address/address.css'

function AddressCard({ img, title, subtitle, tel }) {
  return (
    <div className="address-card">
      <img loading="lazy" src={img} alt={title} />
      <h5>{title} </h5>
      {tel ? <a href="tel:(718)4900334">{tel}</a> :<h4>{subtitle}</h4> }
      
    </div>
  );
}
function Address({title, visitUsCardArr}) {
  return (
    <section className='addressSection'>
    <div className="container">
      <h3 className="address__title">{title}</h3>
      <div className=" address-wrapper ">
        {visitUsCardArr?.map((item)=>{
          return(
            <AddressCard
               key={item.id}
              img={item.image.data.attributes.url}
              title={item.title}
              subtitle={item.subtitle}
            />
          )
        })}
        
      </div>
    </div>
    </section>
  );
}

export default Address;