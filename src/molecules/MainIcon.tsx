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
    />
  );
};

const _Picture = styled(Picture)(({ theme }) => ({
  display: 'inline-block',
  borderRadius: theme.radius.round,
  backgroundColor: theme.color.primary,
}));

export default MainIcon;
