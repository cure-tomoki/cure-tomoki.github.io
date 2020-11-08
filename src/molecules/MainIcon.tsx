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
      style={{ width: size, height: size }}
      width={size}
    />
  );
};

const _Picture = styled(Picture)(({ theme }) => ({
  display: 'inline-block',
  boxSizing: 'border-box',
  borderRadius: theme.radius.round,
  border: `${theme.spacing.half}px solid ${theme.color.onBackground}`,
  backgroundColor: theme.color.primary,
  overflow: 'hidden',
  [theme.media.tablet]: {
    borderWidth: theme.spacing.quarter,
  },
}));

export default MainIcon;
