import React from 'react'
import '../ContactMap/contactMap.css'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

function ContactMap({iframeForMap, items}) {
  return (
    <section className="map_address container">
        <div className="map_address__grid">
          <div className="map_address__content">
            {items?.map((item)=> {
              return(
                <div className="mapContent__text" key={item.id}>  
                  <img src={item?.image?.data?.attributes?.url} alt='icon' />
                  <span>
                   <ReactMarkdown>{item.text}</ReactMarkdown>

                  </span>
                 
              </div>
              )
            })}
            
          </div>
          <div className="map_address__img">
          <iframe title = "map" src={iframeForMap}  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
  )
}

export default ContactMap
