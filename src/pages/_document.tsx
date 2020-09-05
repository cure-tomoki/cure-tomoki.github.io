import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Reset } from 'styled-reset';

import GoogleAnalytics from './_googleAnalitics';

import { SITE_NAME } from '~/constants';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        {/* common head */}
        <Head>
          <meta name="author" content="Tomoki Kano" />
          <meta name="release" content={`v${process.env.VERSION}`} />
          <meta name="environment" content={process.env.ENV} />
          {/* ogp */}
          <meta property="og:url" content="https://tomotetra.github.io" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en" />
          <meta property="og:locale:alternate" content="ja" />
          <meta property="og:site_name" content={SITE_NAME} />
          <meta
            property="og:description"
            content="A Web Developer/Designer in Tokyo JP"
          />
          <meta
            property="og:image"
            content="https://tomotetra.github.io/images/ogp.jpg"
          />
          {/* twitter */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@cure_tomoki" />
          <meta
            name="twitter:description"
            content="A Web Developer/Designer in Tokyo JP"
          />
          <meta
            name="twitter:image"
            content="https://tomotetra.github.io/images/ogp.jpg"
          />
          {/* favicon */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          {/* customFont */}
          <link
            href="https://fonts.googleapis.com/css2?family=Spinnaker&display=swap"
            rel="stylesheet"
          />
          <GoogleAnalytics />
        </Head>
        <Reset />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
