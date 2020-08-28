import * as React from 'react';
import styled from 'styled-components';

import PageTemplate from '~/templates/PageTemplate';

const Index: React.FC = () => {
  return (
    <PageTemplate>
      <Foo>Index Page</Foo>
    </PageTemplate>
  );
};

const Foo = styled.h1({
  color: 'red',
});

export default Index;
