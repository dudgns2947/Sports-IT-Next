import { Fragment } from "react";
import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import Script from "next/script";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <Fragment key="1">
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Fragment>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/images/faviconpng.png" />
          <meta name="apple-mobile-web-app-title" content="스포츠잇" />
          <meta name="application-name" content="스포츠잇" />
          <meta name="description" content="사람과 스포츠를 잇다, 스포츠잇" />
          <Script async src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// import { Html, Head, Main, NextScript } from 'next/document'

// export default function Document() {

//   return (
//     <Html lang="en">
//       <Head />
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   )
// }
