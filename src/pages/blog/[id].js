
import BlogDetailscreen from '@/components/screens/BlogDetails/BlogDetails'
import React from 'react'
import { fetchData } from "@/components/utils/fetchData";

export async function getStaticProps(context) {
  const slug = context.params.id
  const {
    data: { attributes },
  } = await fetchData("blog");

  const blog_hero = attributes.Hero
  const finded = attributes.blog_card.find(item=> item.title.toLowerCase().split(" ").join("-") == slug)
  const seo = attributes.SEO
  if (!attributes) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      finded,
      blog_hero
    },
    revalidate: 60, // In seconds
  };
}

export async function getStaticPaths() {
  const { data } = await fetchData("blog");
  
  const paths = data?.attributes?.blog_card?.map((item)=>{
    return{
      params:{id: item.title.toLowerCase().split(" ").join("-")}
    }
  })

  return {
    paths,
    fallback: false,
  };
}
export default  function BlogDetails({finded, blog_hero, seo}) {

  return (<BlogDetailscreen blog={finded} hero = {blog_hero} SEO={seo}/>)
    
  
}


