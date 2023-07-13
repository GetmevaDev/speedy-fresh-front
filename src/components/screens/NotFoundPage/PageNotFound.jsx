import React from "react";
import RootLayout from "@/components/layout/layout";
import Link from "next/link";


function PageNotFound({ attributes }) {
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
