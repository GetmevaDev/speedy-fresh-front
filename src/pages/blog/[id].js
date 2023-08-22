
import BlogDetailscreen from '@/components/screens/BlogDetails/BlogDetails'
import React from 'react'
import { fetchData } from "@/components/utils/fetchData";
import handleSlug from '@/components/utils/handleSlug';

export async function getStaticProps(context) {
  const slug = context.params.id
  const {
    data: { attributes },
  } = await fetchData("blog");

  const blog_hero = attributes.Hero
  const finded = attributes.blog_card.find(item=> handleSlug(item.title) == slug)
  if (!attributes) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      finded,
      blog_hero,
    },
    revalidate: 60, // In seconds
  };
}

export async function getStaticPaths() {
  const { data } = await fetchData("blog");
  
  const paths = data?.attributes?.blog_card?.map((item)=>{
    return{
      params:{id: handleSlug(item.title)}
    }
  })
  return {
    paths,
    fallback: false,
  };
}
export default  function BlogDetails({finded, blog_hero, seo}) {

  return (<BlogDetailscreen blog={finded} hero = {blog_hero}/>)
    
  
}


