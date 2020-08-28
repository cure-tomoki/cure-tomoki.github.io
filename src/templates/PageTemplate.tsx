import Head from 'next/head';
import * as React from 'react';
import { Reset } from 'styled-reset';

interface Props {
  title?: string;
  children?: React.ReactNode;
}

const Index: React.FC<Props> = (props) => {
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

      {/* reset style */}
      <Reset />

      {/* content */}
      {props.children}
    </>
  );
};

export default Index;
