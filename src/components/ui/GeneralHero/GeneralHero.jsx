import React from 'react'

function GeneralHero({title, subtitle, image, callBtnText, callBtnUrl, pickupBtnText, pickupBtnUrl }) {

  return (
    <section className='generalHero'>
      <div className="container ">
      <div className="hero">
        <div className="hero__content">
          {title && <h2>{title}</h2>}
          {subtitle && <h4>{subtitle}</h4>}
          <div className="hero__cta">
            <a href={pickupBtnUrl } className="btn btn--primary">
             {pickupBtnText}
            </a>
            <a href={callBtnUrl} className="btn btn--secondary">
              {callBtnText}
            </a>
          </div>
        </div>
        <div className="hero__image">
          <img loading="lazy" src={image} alt="hero" />
        </div>
      </div>

      
     
    </div>
    </section>
  )
}

export default GeneralHero
