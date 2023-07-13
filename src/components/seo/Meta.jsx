import Head from "next/head";
import React from "react";
import Script from 'next/script'

const Meta = ({
  title,
  description,
  children,
  twitterCard,
  twitterDomain,
  twitterUrl,
  twitterTitle,
  twitterDescription,
  twitterImage,
  image,
}) => (
  <>
    <Head>
   
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-FHQQS49S2W"  strategy="afterInteractive" />
      
      <Script>
      {` window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments)
        }
        gtag("js", new Date());

        gtag("config", "G-FHQQS49S2W");`}
      </Script>
     
      <title>{title}</title>
    
      <link rel="canonical" href={twitterUrl} />
      <meta property="og:type" content="website" />
      {title && <meta name="og:title" content={title} key="title" />}
      {description && (
        <meta name="description" content={description} key="description" />
      )}
      {description && (
        <meta
          name="og:description"
          content={description}
          key="og:description"
        />
      )}
      {image && <meta property="og:image" content={image} key="og:image" />}

      {twitterUrl && (
        <meta property="og:url" content={twitterUrl} key="og:url" />
      )}
      {twitterUrl && (
        <meta property="twitter:url" content={twitterUrl} key="twitter:url" />
      )}
      {twitterCard && (
        <meta name="twitter:card" content={twitterCard} key="twitter:card" />
      )}
      {twitterDomain && (
        <meta
          property="twitter:domain"
          content={twitterDomain}
          key="twitter:domain"
        />
      )}
      {twitterTitle && (
        <meta name="twitter:title" content={twitterTitle} key="twitter:title" />
      )}
      {twitterImage && (
        <meta name="twitter:image" content={twitterImage} key="twitter:image" />
      )}
      {twitterDescription && (
        <meta
          name="twitter:description"
          content={twitterDescription}
          key="twitter:description"
        />
      )}

    <link rel="icon" type="image/png" href="/images/favicon.png" />
    </Head>
    {children}
  </>
);
export default Meta;