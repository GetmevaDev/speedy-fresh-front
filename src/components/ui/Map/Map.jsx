import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function Map({ mapUrl, title, mapItem }) {
  return (
    <div className="container">
      <div className="map-container">
        <div className="mapContent">
          <h4>{title}</h4>
          {mapItem.map((item, index) => {
            let isSecond = index === 1;
            return (
              <div className="mapContent__text" key={item.id}>
                <img
                  loading="lazy"
                  src={item.image.data.attributes.url}
                  alt={item.text}
                />

                <span>
                  {isSecond ? (
                    <a href="tel:(718)4900334">
                      <ReactMarkdown>{item.text}</ReactMarkdown>
                    </a>
                  ) : (
                    <ReactMarkdown>{item.text}</ReactMarkdown>
                  )}
                </span>
              </div>
            );
          })}
        </div>

        <iframe
          title="map"
          src={mapUrl}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
