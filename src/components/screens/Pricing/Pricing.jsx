import React from "react";
import styles from "./pricing.module.css";
import RootLayout from "@/components/layout/layout";
import GeneralHero from "@/components/ui/GeneralHero/GeneralHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs/Breadcrumbs";
import ImageWithText from "@/components/ui/ImageWithText/ImageWithText";
import PricingCard from "@/components/ui/PricingCard/PricingCard";
import PriceCardFull from "@/components/ui/PriceCardFull/PriceCardFull";
import PriceCardWithClick from "@/components/ui/PriceCardWithClock/PriceCardWithClick";
import ImageBanner from "@/components/ui/ImageBanner/ImageBanner";
import TextBanner from "@/components/ui/TextBanner/TextBanner";
import PriceTextBanner from "@/components/ui/PriceTextBanner/PriceTextBanner";

function PricingScreen({ attributes }) {
  console.log(attributes);
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

      <Breadcrumbs current="Pricing" />

      <section className="pricing__image__text__banner">
        <ImageWithText
          paragraph={attributes?.ImageWithText?.description}
          img={attributes?.ImageWithText?.Image?.data?.attributes?.url}
          img_alt={
            attributes?.ImageWithText?.Image?.data?.attributes?.alternativeText
          }
        />
      </section>
      <PricingCard
        title={attributes?.PriceItems?.title}
        pricingCardItems={attributes?.PriceItems?.item}
      />
      <PriceCardFull
        title={attributes?.PriceItems2?.title}
        pricingCardItems={attributes?.PriceItems2?.item}
        price_btn={true}
      />
      <PriceCardWithClick
        title={attributes?.Pirce_card?.title}
        items={attributes?.Pirce_card?.Price_card_item}
      />
      <div className="container">
        <section className={styles.priceCardGrid}>
          <PriceCardFull
            title={attributes?.PriceItems3?.title}
            pricingCardItems={attributes?.PriceItems3?.item}
            price_btn={true}
          />
          <PriceCardFull
            title={attributes?.PriceItems4?.title}
            pricingCardItems={attributes?.PriceItems4?.item}
            price_btn={false}
          />
        </section>
      </div>
      <section className={styles.priceImageBanner}>
        <ImageBanner
          title={attributes?.banner_img[0]?.title}
          subtitle={attributes?.banner_img[0]?.subtitle}
          img={attributes?.banner_img[0]?.Image?.data?.attributes?.url}
        />
      </section>
      
      <PriceTextBanner
        title={attributes?.banner_text?.title}
        subtitle={attributes?.banner_text?.subtitle}
        description={attributes?.banner_text?.description}
        lists={attributes?.banner_text?.lists}
        bg={false}
      />
      <PriceTextBanner
        title={attributes?.banner_text2?.title}
        subtitle={attributes?.banner_text2?.subtitle}
        description={attributes?.banner_text2?.description}
        lists={attributes?.banner_text2?.lists}
        bg={true}
      />
      <PriceTextBanner
        title={attributes?.text_banner_with_image?.title}
        description={attributes?.text_banner_with_image?.description}
        bg={false}
      />
      <div className="container">            
        <div className={styles.price__logos__wrapper}>
          {attributes?.text_banner_with_image?.images?.map((item)=>{
            return (
              <img loading="lazy" key={item.id} src={item?.image?.data?.attributes?.url} alt={item?.image?.data?.attributes?.alternativeText}/>
            )
          })}
        </div>
      </div> 
      <PriceTextBanner
        title={attributes?.text_content?.title}
        description={attributes?.text_content?.description}
        bg={false}
      />
    </RootLayout>
  );
}

export default PricingScreen;
