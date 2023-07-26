import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W9RD3PP"
        height={0} width={0} style={{display:"none", visibility:"hidden"}}></iframe></noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}