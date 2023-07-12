import Header from "@/components/layout/Header/Header";
import "../css/fonts.css";
import "./globals.css";
import Footer from "@/components/layout/Footer/Footer";
import Meta from "@/components/seo/Meta";



export default function RootLayout({
  children,
  title,
  description,
  twitterCard,
  twitterDomain,
  twitterUrl,
  twitterTitle,
  twitterDescription,
  twitterImage,
  image,
}) {
  return (
    <Meta
      title={title}
      description={description}
      twitterCard={twitterCard}
      twitterDescription={twitterDescription}
      twitterDomain={twitterDomain}
      twitterImage={twitterImage}
      twitterTitle={twitterTitle}
      twitterUrl={twitterUrl}
      image={image}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </Meta>
  );
}
