import Head from 'next/head';
import * as React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';

import useTheme from '~/hooks/useTheme';
import { isDev } from '~/utils/envUtils';

interface Props {
  title?: string;
  children?: React.ReactNode;
}

const SITE_NAME = 'tomotetra';

const PageTemplate: React.FC<Props> = (props) => {
  const { theme, themeName, toggleTheme } = useTheme();

  const title = [SITE_NAME, props.title].filter((t) => !!t).join(' | ');
  return (
    <>
      {/* common head */}
      <Head>
        <title>{title}</title>
        {/* @ts-ignore */}
        <meta charset="UTF-8" />
        <meta name="author" content="Tomoki Kano" />
        <meta name="release" content={`v${process.env.VERSION}`} />
        <meta name="environment" content={process.env.ENV} />
        {/* ogp */}
        <meta property="og:url" content="https://tomotetra.github.io" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:locale:alternate" content="ja" />
        <meta property="og:title" content={title} />
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
        <meta name="twitter:title" content={title} />
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
      </Head>
      <Reset />
      <ThemeProvider theme={theme}>
        <Global />
        {props.children}
        {/* theme debugger */}
        {isDev && (
          <ThemeButton type="button" onClick={toggleTheme}>
            {`theme: ${themeName}`}
          </ThemeButton>
        )}
      </ThemeProvider>
    </>
  );
};

const Global = createGlobalStyle(({ theme }) => ({
  body: {
    backgroundColor: theme.color.background,
    color: theme.color.onBackground,
    lineHeight: 1.5,
    fontSize: theme.fontSize.xs,
    fontFamily: `"${theme.fontFamily.default}","Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,sans-serif`,
  },
}));

const ThemeButton = styled.button(({ theme }) => ({
  position: 'fixed',
  bottom: 100,
  right: 100,
  backgroundColor: 'transparent',
  color: theme.color.onBackground,
  border: `1px solid ${theme.color.onBackground}`,
  padding: theme.spacing.half,
  margin: theme.spacing.normal,
}));

export default PageTemplate;
