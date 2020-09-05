import * as React from 'react';
import styled from 'styled-components';

import Picture from '~/atoms/Picture';

interface Props {
  size?: number;
}

const MainIcon: React.FC<Props> = ({ size = 256 }) => {
  return (
    <_Picture
      alt="profile picture"
      width={size}
      height={size}
      sourcePaths={[
        {
          srcSet: '/images/mainIcon.webp',
          type: 'image/webp',
        },
        {
          srcSet: '/images/mainIcon.png',
          type: 'image/png',
        },
      ]}
      size={size}
    />
  );
};

const _Picture = styled(Picture)<{
  size?: number | string;
}>(({ theme, size }) => ({
  display: 'inline-block',
  width: size ?? '',
  height: size ?? '',
  borderRadius: theme.radius.round,
  backgroundColor: theme.color.primary,
}));

export default MainIcon;
