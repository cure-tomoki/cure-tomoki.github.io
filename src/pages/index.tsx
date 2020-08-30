import * as React from 'react';
import styled from 'styled-components';

import useWindowSize from '../hooks/useWindowSize';

import PageTemplate from '~/templates/PageTemplate';

const Index: React.FC = () => {
  const { width, height } = useWindowSize();

  return (
    <PageTemplate>
      <Foo>{`${width} / ${height}`}</Foo>
    </PageTemplate>
  );
};

const Foo = styled.h1(({ theme }) => ({
  color: theme.color.onBackground,
}));

export default Index;
