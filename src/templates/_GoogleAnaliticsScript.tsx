import * as React from 'react';

import { GA_ID } from '~/constants';
import { isDev } from '~/utils/envUtils';

const GoogleAnalyticsScript: React.FC = () => {
  if (isDev) {
    // returning null causes nuxt error
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: 'console.info("DEV: Google Analytics is disabled")',
        }}
      />
    );
  }
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GA_ID}');`,
        }}
      />
    </>
  );
};

export default GoogleAnalyticsScript;
