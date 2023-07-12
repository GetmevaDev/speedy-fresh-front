import HomeScreen from "@/components/screens/Home/Home";
import { fetchData } from "@/components/utils/fetchData";


export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchData("home-page");

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


export default function Home({attributes}) {
  
  return (    
    <HomeScreen attributes={attributes}  />
  )
}

