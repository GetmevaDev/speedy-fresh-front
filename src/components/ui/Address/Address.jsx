import React from 'react'



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
      <h2 className="address__title">{title}</h2>
      <div className=" address-wrapper ">
        {visitUsCardArr?.map((item, index)=>{
          const isLastItem = index === visitUsCardArr.length - 1;
          return(
            <AddressCard
               key={item.id}
               img={item.image.data.attributes.url}
               title={item.title}
               subtitle={item.subtitle}
               tel={isLastItem ? item.subtitle: false}
            />
          )
        })}
        
      </div>
    </div>
    </section>
  );
}

export default Address;