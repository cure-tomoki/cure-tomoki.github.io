import Head from 'next/head';
import * as React from 'react';

import GoogleAnalyticsScript from './_GoogleAnaliticsScript';

import { SITE_NAME } from '~/constants';
interface Props {
  pageTitle?: string;
}

const CommonHead: React.FC<Props> = ({ pageTitle }) => {
  const title = [SITE_NAME, pageTitle].filter((t) => !!t).join(' | ');

  return (
    <Head>
      <title>{title}</title>
      <meta content="Tomoki Kano" name="author" />
      <meta content={`v${process.env.VERSION}`} name="release" />
      <meta content={process.env.ENV} name="environment" />
      {/* ogp */}
      <meta content={title} property="og:title" />
      <meta content="https://cure-tmk.github.io" property="og:url" />
      <meta content="website" property="og:type" />
      <meta content="en" property="og:locale" />
      <meta content="ja" property="og:locale:alternate" />
      <meta content={SITE_NAME} property="og:site_name" />
      <meta
        content="A Web Developer/Designer in Tokyo JP"
        property="og:description"
      />
      <meta
        content="https://cure-tmk.github.io/images/ogp.jpg"
        property="og:image"
      />
      {/* twitter */}
      <meta content={title} name="twitter:title" />
      <meta content="summary" name="twitter:card" />
      <meta content="@cure_tmk" name="twitter:site" />
      <meta
        content="A Web Developer/Designer in Tokyo JP"
        name="twitter:description"
      />
      <meta
        content="https://cure-tmk.github.io/images/ogp.jpg"
        name="twitter:image"
      />
      {/* favicon */}
      <link
        href="/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      {/* customFont */}
      <link
        href="https://fonts.googleapis.com/css2?family=Spinnaker&display=swap"
        rel="stylesheet"
      />
      {/* google analytics */}
      <GoogleAnalyticsScript />
    </Head>
  );
};

export default CommonHead;
