import * as React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';

import CommonHead from './_CommonHead';

import useTheme from '~/hooks/useTheme';
import Footer from '~/organisms/Footer';

interface Props {
  title?: string;
  children?: React.ReactNode;
}

const PageTemplate: React.FC<Props> = (props) => {
  const { theme } = useTheme();
  return (
    <>
      {/* common head */}
      <CommonHead pageTitle={props.title} />
      <Reset />
      <ThemeProvider theme={theme}>
        <Global />
        {props.children}
        {/* footer */}
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

export default PageTemplate;
