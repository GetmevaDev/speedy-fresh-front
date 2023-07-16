import React from 'react'
import { fetchData } from "@/components/utils/fetchData";
import PricingScreen from '@/components/screens/Pricing/Pricing';
export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchData("pricing-page");

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


function Pricing({attributes}) {
  return (
    <PricingScreen attributes={attributes} />
  )
}

export default Pricing
