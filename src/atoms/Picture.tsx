import * as React from 'react';

import { AtLeast } from '~/utils/typeUtils';

interface SourceProps
  extends React.DetailedHTMLProps<
    React.SourceHTMLAttributes<HTMLSourceElement>,
    HTMLSourceElement
  > {
  srcSet: string;
}

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  alt: string;
  sourcePaths: AtLeast<1, SourceProps>;
  width?: number | string;
  height?: number | string;
}

const Picture: React.FC<Props> = ({
  sourcePaths,
  alt,
  width,
  height,
  ...pictureProps
}) => {
  // fallback to the last source set
  const fallBackSrc = sourcePaths[sourcePaths.length - 1].srcSet;
  return (
    <picture {...pictureProps}>
      {sourcePaths.map((s) => (
        <source {...s}></source>
      ))}
      <img src={fallBackSrc} alt={alt} {...{ width, height }}></img>
    </picture>
  );
};

export default Picture;
