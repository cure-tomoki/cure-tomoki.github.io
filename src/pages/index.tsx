import * as React from 'react';
import styled from 'styled-components';

import useWindowSize from '../hooks/useWindowSize';

import MainIcon from '~/molecules/MainIcon';
import PageTemplate from '~/templates/PageTemplate';

const IndexPage: React.FC = () => {
  const { width, height } = useWindowSize();

  return (
    <PageTemplate>
      <Foo>{`${width} / ${height}`}</Foo>
      <MainIcon />
    </PageTemplate>
  );
};

const Foo = styled.h1(({ theme }) => ({
  color: theme.color.onBackground,
}));

export default IndexPage;
