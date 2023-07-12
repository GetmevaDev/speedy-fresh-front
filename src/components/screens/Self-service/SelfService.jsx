import React from "react";
import RootLayout from "@/components/layout/layout";
import Efficient from "@/components/ui/Efficient/Efficient";
import GeneralHero from "@/components/ui/GeneralHero/GeneralHero";
import ImageBanner from "@/components/ui/ImageBanner/ImageBanner";
import ImageWithText from "@/components/ui/ImageWithText/ImageWithText";
import Efficient2 from "@/components/ui/Efficient2/Efficient2";
import Drayers from "@/components/ui/Drayers/Drayers";
import Breadcrumbs from "@/components/ui/Breadcrumbs/Breadcrumbs";

function SelfServiceScreen({ attributes }) {
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
      <Breadcrumbs current="Self Service" />

      <ImageBanner
        title={attributes?.ImageBanner?.title}
        subtitle={attributes?.ImageBanner?.subtitle}
        img={attributes?.ImageBanner?.Image?.data?.attributes?.url}
      />
      <Efficient
        title={attributes?.EfficientBanner?.title}
        description={attributes?.EfficientBanner?.description}
        items={attributes?.EfficientBanner?.Items}
      />
      <ImageWithText
        title={attributes?.ImageTextBanner?.title}
        paragraph={attributes?.ImageTextBanner?.description}
        img={attributes?.ImageTextBanner?.Image.data.attributes.url}
        img_alt={
          attributes?.ImageTextBanner?.Image.data.attributes.alternativeText
        }
      />
      <Efficient2
        title={attributes?.EfficientBanner2?.title}
        items={attributes?.EfficientBanner2?.Items}
      />

      <ImageBanner
        title={attributes?.ImageBanner2?.title}
        img={attributes?.ImageBanner2?.Image?.data?.attributes?.url}
      />
      
      <Drayers title={attributes?.title} items={attributes?.card_item} />
    </RootLayout>
  );
}

export default SelfServiceScreen;
