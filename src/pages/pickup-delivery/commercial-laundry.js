import React from 'react'
import { fetchData } from "@/components/utils/fetchData";
import CommercialLaundryScreen from '@/components/screens/Commercial-laundry/CommercialLaundry';


export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchData("commercial-loundry-page");

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

function CommercialLaundry({attributes}) {
  return (
   <CommercialLaundryScreen attributes={attributes} />
  )
}

export default CommercialLaundry
