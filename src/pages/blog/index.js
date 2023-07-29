import React from 'react'
import { fetchData } from "@/components/utils/fetchData";
import BlogScreen from '@/components/screens/Blog/Blog';

export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchData("blog");

  if (!attributes) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      attributes,
    },
    revalidate: 60, // In seconds
  };
}


function Blog({attributes}) {
  return (  <BlogScreen attributes={attributes} />  )
 
}

export default Blog
