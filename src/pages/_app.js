import Script from 'next/script'

import "../css/fonts.css"
import "../css/globals.css"
import "../css/address.css"
import "../css/404.css"
import "../css/benefits.css"
import "../css/breadcrumbs.css"
import "../css/burger.css"
import "../css/burgerMenu.css"
import "../css/contactMap.css"
import "../css/drayers.css"
import "../css/efficient.css"
import "../css/efficient2.css"
import "../css/generalHero.css"
import "../css/homePriceBanner.css"
import "../css/imageBanner.css"
import "../css/imageWithText.css"
import "../css/map.css"
import "../css/pickupProcess.css"
import "../css/textBanner.css"
import "../css/washProcess.css"
import "../css/washFold.css"
import "../css/pickupDeliveryScreen.css"
export default function MyApp({ Component, pageProps }) {
  return(
    <main>
       <Script src="https://www.googletagmanager.com/gtag/js?id=G-FHQQS49S2W"  strategy="afterInteractive" />

      
        
        <Script id="google-analytics" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W9RD3PP');`}
        </Script>
        
         <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W9RD3PP"
        height={0} width={0} style={{display:"none", visibility:"hidden"}}></iframe></noscript>

      <Component {...pageProps} />
    </main>
     
     )
}