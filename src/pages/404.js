import PageNotFound from "@/components/screens/NotFoundPage/PageNotFound";
import { fetchData } from "@/components/utils/fetchData";


export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchData("error-page");

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

export default function NotFound({ attributes }) {
  return <PageNotFound attributes = {attributes} />;
}