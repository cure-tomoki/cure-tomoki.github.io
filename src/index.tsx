import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <p>tomotetra.githhub.io</p>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
