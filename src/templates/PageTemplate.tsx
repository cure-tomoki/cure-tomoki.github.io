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

const Index: React.FC<Props> = (props) => {
  const { theme, themeName, toggleTheme } = useTheme();
  return (
    <>
      {/* common head */}
      <Head>
        <title>
          {['tomotetra', props.title].filter((t) => !!t).join(' | ')}
        </title>
        <meta name="release" content={`v${process.env.VERSION}`} />
        <meta name="environment" content={process.env.ENV} />
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

export default Index;