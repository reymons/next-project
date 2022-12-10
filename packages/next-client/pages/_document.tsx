import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from "next/document";
import { ServerStyleSheet } from "styled-components";

const preloadedFonts = [
  "/fonts/OpenSans/OpenSans-Regular.woff2",
  "/fonts/OpenSans/OpenSans-SemiBold.woff2",
  "/fonts/OpenSans/OpenSans-Bold.woff2"
];

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()]
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
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
          <script
            dangerouslySetInnerHTML={{
              __html: `document.body.style.setProperty("--100vh", window.innerHeight + "px");`
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
