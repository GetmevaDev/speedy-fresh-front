import React from 'react'
import { fetchData } from "@/components/utils/fetchData";
import WashFoldScreen from '@/components/screens/Wash-fold/WashFold'



export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchData("wash-fold-page");

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


function WashFold({attributes}) {
  return (
    <WashFoldScreen attributes={attributes} />
  )
}

export default WashFold
