import SelfServiceScreen from '@/components/screens/Self-service/SelfService';
import React from 'react'
import { fetchData } from "@/components/utils/fetchData";



export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchData("sefl-service-page");

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


export default function SelfService({attributes}) {
  return (
    <SelfServiceScreen attributes={attributes} />
  )
}


