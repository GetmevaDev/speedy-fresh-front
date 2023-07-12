import React from "react";
import "../NotFoundPage/404.css";
import RootLayout from "@/components/layout/layout";
import Link from "next/link";


function PageNotFound({ attributes }) {
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
      <div className="PageNotFound">
        <main className="main">
          <div className="container">
            <div className="main__body">
              <img loading="lazy" src={attributes?.img?.data?.attributes?.url} alt="img 404" />
              <h3>{attributes?.title}</h3>
              
              <Link href={attributes?.btn_link}>{attributes?.btn_title}</Link>
            </div>
          </div>
        </main>
      </div>
    </RootLayout>
  );
}

export default PageNotFound;
