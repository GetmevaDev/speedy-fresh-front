import React from 'react'
import { fetchData } from "@/components/utils/fetchData";
import PickupDeliveryScreen from '@/components/screens/Pickup-delivery/PickupDeliveryScreen';

export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchData("pickup-delivery-page");

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

function PickupDelivery({attributes}) {
  return (
    <PickupDeliveryScreen attributes={attributes} />
  )
}

export default PickupDelivery
