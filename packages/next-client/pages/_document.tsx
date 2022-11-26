import { Html, Head, Main, NextScript } from "next/document";

const preloadedFonts = ["/fonts/OpenSans/OpenSans-Regular.woff2"];

const Document = () => {
  return (
    <Html>
      <Head>
        {preloadedFonts.map(href => (
          <link
            key={href}
            as="font"
            crossOrigin="anonymous"
            href={href}
            rel="preload"
            type="font/woff2"
          />
        ))}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
