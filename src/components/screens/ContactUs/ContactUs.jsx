import React from 'react'
import RootLayout from "@/app/layout";
import GeneralHero from "@/components/ui/GeneralHero/GeneralHero";
import ContactMap from '@/components/ui/ContactMap/ContactMap';
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs';

export default  function ContactUsScreen({attributes}) {
  return (
    <RootLayout
    attributes={attributes}
    title={attributes?.SEO?.title}
    description={attributes?.SEO?.description}
    image={attributes?.SEO?.image}
    twitterCard={attributes?.SEO?.twitter_card}
    twitterDescription={attributes?.SEO?.twitter_description}
    twitterDomain={attributes?.SEO?.twitter_domain}
    twitterImage={attributes?.SEO?.twitter_image}
    twitterTitle={attributes?.SEO?.twitter_title}
    twitterUrl={attributes?.SEO?.twitter_url}
  >
    
      <GeneralHero
        title={attributes?.Hero?.title}
        subtitle={attributes?.Hero?.description}
        callBtnText={attributes?.Hero?.call_btn_text}
        callBtnUrl={attributes?.Hero?.call_btn_url}
        pickupBtnText={attributes?.Hero?.btn_title}
        pickupBtnUrl={attributes?.Hero?.btn_url}
        image={attributes?.Hero?.image?.data?.attributes?.url}
      />
    <Breadcrumbs current="Contact Us" />
    <ContactMap iframeForMap={attributes?.MapContact?.IframeForMap} items={attributes?.MapContact?.mapItem}  />
  </RootLayout>
  )
}


