import React from 'react'
import RootLayout from "@/components/layout/layout";
import Breadcrumbs from "@/components/ui/Breadcrumbs/Breadcrumbs";
import BlogHero from "@/components/ui/BlogHero/BlogHero";
import BlogBody from '@/components/ui/BlogBody/BlogBody';

function BlogDetailscreen({blog, hero}) {
  return (
    <RootLayout 
    title={blog.SEO?.title}
    description={blog.SEO?.description}
    image={blog.SEO?.image}
    twitterCard={blog.SEO?.twitterCard}
    twitterDescription={blog.SEO?.twitterDescription}
    twitterDomain={blog.SEO?.twitterDomain}
    twitterImage={blog.SEO?.twitterImage}
    twitterTitle={blog.SEO?.twitterTitle}
    twitterUrl={blog.SEO?.twitterUrl}
    
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
