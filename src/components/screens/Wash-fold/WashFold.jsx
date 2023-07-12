import RootLayout from "@/components/layout/layout";
import GeneralHero from "@/components/ui/GeneralHero/GeneralHero";
import React from "react";

import ImageWithText from "@/components/ui/ImageWithText/ImageWithText";
import WashProcess from "@/components/ui/WashProcess/WashProcess";
import TextBanner from "@/components/ui/TextBanner/TextBanner";
import Breadcrumbs from "@/components/ui/Breadcrumbs/Breadcrumbs";


function WashFoldScreen({ attributes }) {
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
      <section className="washAndFold">
        <GeneralHero
          title={attributes?.Hero?.title}
          subtitle={attributes?.Hero?.description}
          callBtnText={attributes?.Hero?.call_btn_text}
          callBtnUrl={attributes?.Hero?.call_btn_url}
          pickupBtnText={attributes?.Hero?.btn_title}
          pickupBtnUrl={attributes?.Hero?.btn_url}
          image={attributes?.Hero?.image?.data?.attributes?.url}
        />
      </section>
      <Breadcrumbs current="Wash & Fold" />
      <ImageWithText
        paragraph={attributes?.ImageWithText?.description}
        img={attributes?.ImageWithText?.Image?.data?.attributes?.url}
        img_alt={attributes?.ImageWithText?.Image?.data?.attributes?.alternativeText}
      />

      <WashProcess title={attributes?.WashProcess?.title} items={attributes?.WashProcess?.Items} />
      {attributes?.ImageWithTextBanner.map((banner) => {
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

      <TextBanner text={attributes?.TextBanner?.description} />
    </RootLayout>
  );
}

export default WashFoldScreen;
