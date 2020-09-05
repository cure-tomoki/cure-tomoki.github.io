import Head from 'next/head';
import * as React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';

import { SITE_NAME } from '~/constants';
import useTheme from '~/hooks/useTheme';
import Footer from '~/organisms/Footer';
import { isDev } from '~/utils/envUtils';

interface Props {
  title?: string;
  children?: React.ReactNode;
}

const PageTemplate: React.FC<Props> = (props) => {
  const { theme, themeName, toggleTheme } = useTheme();

  const title = [SITE_NAME, props.title].filter((t) => !!t).join(' | ');
  return (
    <>
      {/* common head */}
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />
      </Head>
      <Reset />
      <ThemeProvider theme={theme}>
        <Global />
        {props.children}
        {/* footer */}
        <Footer />
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
