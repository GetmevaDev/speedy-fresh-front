import RootLayout from "@/components/layout/layout";
import BlogCard from "@/components/ui/BlogCard/BlogCard";
import BlogHero from "@/components/ui/BlogHero/BlogHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs/Breadcrumbs";

import React from "react";

function BlogScreen({ attributes }) {
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
      <BlogHero
        title={attributes?.Hero?.title}
        subtitle={attributes?.Hero?.description}
        callBtnText={attributes?.Hero?.call_btn_text}
        callBtnUrl={attributes?.Hero?.call_btn_url}
        pickupBtnText={attributes?.Hero?.btn_title}
        pickupBtnUrl={attributes?.Hero?.btn_url}
        image={attributes?.Hero?.image?.data?.attributes?.url}
      />
      <Breadcrumbs current="Blog" />

      <BlogCard blogs={attributes?.blog_card} />
    </RootLayout>
  );
}

export default BlogScreen;
