import RootLayout from "@/app/layout";
import Breadcrumbs from "@/components/ui/Breadcrumbs/Breadcrumbs";
import GeneralHero from "@/components/ui/GeneralHero/GeneralHero";
import ImageWithText from "@/components/ui/ImageWithText/ImageWithText";
import TextBanner from "@/components/ui/TextBanner/TextBanner";
import React from "react";
// import '../../ui/ImageWithText/imageWithText.css'

function AboutScreen({ attributes }) {
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
      <Breadcrumbs current="About Us" />
      <TextBanner text={attributes?.TextBanner?.description} />
      {attributes?.ImageWithText.map((banner) => {
        return (
          <section className="imageWithText" key={banner?.id}>
            <ImageWithText
              title={banner?.title}
              paragraph={banner?.description}
              img={banner?.Image?.data?.attributes?.url}
              img_alt={banner?.Image?.data?.attributes?.alternativeText}
            />
          </section>
        );
      })}
    </RootLayout>
  );
}

export default AboutScreen;
