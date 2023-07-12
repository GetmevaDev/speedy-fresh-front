import AboutScreen from '@/components/screens/About/About'
import React from 'react'
import { fetchData } from "@/components/utils/fetchData";



export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchData("about-us");

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



export default function AboutUs({attributes}) {
  
  return (
    <AboutScreen attributes={attributes} />
  )
}
