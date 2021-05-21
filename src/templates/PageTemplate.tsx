import { Footer } from '@components/fragments/navs/Footer';
import useTheme from '@hooks/useTheme';
import useWindowSize from '@hooks/useWindowSize';
import * as React from 'react';
import styled from 'styled-components';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';

import CommonHead from './_CommonHead';

interface Props {
  title?: string;
  children?: React.ReactNode;
}

const PageTemplate: React.FC<Props> = (props) => {
  const { theme } = useTheme();
  const { dimentions } = useWindowSize();

  const [isLoading, setIsLoading] = React.useState(true);

  // wait for dimentions to avoid layout shift
  React.useEffect(() => {
    if (dimentions !== null) {
      setIsLoading(false);
    }
  }, [dimentions]);

  return (
    <>
      <CommonHead pageTitle={props.title} />
      <Reset />
      <ThemeProvider theme={theme}>
        <Global />
        {isLoading ? (
          <Loading>
            <p>Loading...</p>
          </Loading>
        ) : (
          props.children
        )}
        <Footer />
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

const Loading = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '80vh',
  backgroundColor: theme.color.background,
  color: theme.color.onBackground,
}));

export default PageTemplate;
