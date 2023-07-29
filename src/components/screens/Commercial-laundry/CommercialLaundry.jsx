import React from "react";
import RootLayout from "@/components/layout/layout";
import GeneralHero from "@/components/ui/GeneralHero/GeneralHero";
import ImageWithText from "@/components/ui/ImageWithText/ImageWithText";
import TextBanner from "@/components/ui/TextBanner/TextBanner";
import Breadcrumbs from "@/components/ui/Breadcrumbs/Breadcrumbs";

export default function CommercialLaundryScreen({ attributes }) {
  return (
    <RootLayout
    attributes={attributes}
    title={attributes?.SEO?.title}
    description={attributes?.SEO?.description}
    image={attributes?.SEO?.image}
    twitterCard={attributes?.SEO?.twitterCard}
    twitterDescription={attributes?.SEO?.twitterDescription}
    twitterDomain={attributes?.SEO?.twitterDomain}
    twitterImage={attributes?.SEO?.twitterImage}
    twitterTitle={attributes?.SEO?.twitterTitle}
    twitterUrl={attributes?.SEO?.twitterUrl}
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

      <Breadcrumbs  sub="Commercial Laundry Services" prev="Pickup Delivery" prev_url='/pickup-delivery' />
      <section className="pickupDeliveryScreen__reverseBanner">
        <ImageWithText
          paragraph={attributes?.ImageWithText?.description}
          img={attributes?.ImageWithText?.Image?.data?.attributes?.url}
          img_alt={
            attributes?.ImageWithText?.Image?.data?.attributes?.alternativeText
          }
        />
      </section>

      <TextBanner
        title={attributes?.TextBanner?.title}
        subtitle={attributes?.TextBanner?.subtitle}
        text={attributes?.TextBanner?.description}
      />

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

      <TextBanner text={attributes?.TextBanner2?.description} />
    </RootLayout>
  );
}
