import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function TextBanner({title,subtitle,  text}) {
  return (
    <div className="container"  >
      <div className="textBanner">
      {title && <h3 >{title}</h3>}
      {subtitle && <h4 >{subtitle}</h4>}
      {text && <p >{text}</p>} 

     </div>
    </div>
  )
}

export default TextBanner
