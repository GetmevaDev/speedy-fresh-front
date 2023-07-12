import React from 'react'
import { fetchData } from "@/components/utils/fetchData";
import ContactUsScreen from '@/components/screens/ContactUs/ContactUs';


export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchData("contact-us-page");

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

function ContactUs({attributes}) {
  return (
   <ContactUsScreen attributes={attributes} />
  )
}

export default ContactUs
