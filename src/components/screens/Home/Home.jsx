import RootLayout from "@/app/layout";
import Address from "@/components/ui/Address/Address";
import Benefits from "@/components/ui/Benefits/Benefits";
import Hero from "@/components/ui/Hero/Hero";
import HomePriceBanner from "@/components/ui/HomePriceBanner/HomePriceBanner";
import Map from "@/components/ui/Map/Map";
import React from "react";

function HomeScreen({ attributes }) {
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
      <Hero
        title={attributes?.Hero?.title}
        subtitle={attributes?.Hero?.description}
        callBtnText={attributes?.Hero?.call_btn_text}
        callBtnUrl={attributes?.Hero?.call_btn_url}
        pickupBtnText={attributes?.Hero?.btn_title}
        pickupBtnUrl={attributes?.Hero?.btn_url}
        image={attributes?.Hero?.image?.data?.attributes?.url}
      />

      <Address
        title={attributes?.VisitUs?.title}
        visitUsCardArr={attributes?.VisitUs?.visitUsCard}
      />
      <Benefits
        bg_img={
          attributes?.OurBenefits?.Background_image?.data?.attributes?.url
        }
        title={attributes?.OurBenefits?.title}
        subtitle={attributes?.OurBenefits?.subtitle}
        ourBenefitsCardArr={attributes?.OurBenefits?.ourBenefitsCard}
      />
      <HomePriceBanner
        title={attributes?.ImageWithText?.title}
        description={attributes?.ImageWithText?.description}
        btn_link={attributes?.ImageWithText?.btn_link}
        btn_title={attributes?.ImageWithText?.btn_title}
        image={attributes?.ImageWithText?.Image.data.attributes.url}
      />
      <Map
        title={attributes?.Map?.title}
        mapUrl={attributes?.Map?.IframeForMap}
        mapItem={attributes?.Map?.mapItem}
      />
    </RootLayout>
  );
}

export default HomeScreen;
