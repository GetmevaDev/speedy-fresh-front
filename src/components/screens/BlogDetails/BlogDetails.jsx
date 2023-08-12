import React from 'react'
import RootLayout from "@/components/layout/layout";
import Breadcrumbs from "@/components/ui/Breadcrumbs/Breadcrumbs";
import BlogHero from "@/components/ui/BlogHero/BlogHero";
import BlogBody from '@/components/ui/BlogBody/BlogBody';

function BlogDetailscreen({blog, hero, SEO}) {
  // console.log(blog);
  return (
    <RootLayout 
      title={SEO?.title}
      description={SEO?.description}
      image={SEO?.image}
      twitterCard={SEO?.twitterCard}
      twitterDescription={SEO?.twitterDescription}
      twitterDomain={SEO?.twitterDomain}
      twitterImage={SEO?.twitterImage}
      twitterTitle={SEO?.twitterTitle}
      twitterUrl={SEO?.twitterUrl}
    
    >  

    <BlogHero
      title={blog.title}      
      image={hero.image?.data?.attributes?.url}
    />
    <Breadcrumbs  sub={blog.title} prev='Blog' prev_url='/blog' />
    <BlogBody blog_body={blog.blog_body} image={blog.image}/>
    </RootLayout>
  )
}

export default BlogDetailscreen
