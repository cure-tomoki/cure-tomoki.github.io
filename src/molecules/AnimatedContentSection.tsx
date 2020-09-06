import * as React from 'react';

import ContentSection from '~/atoms/ContentSection';
// import useIntersectionObserver from '~/hooks/useIntersectionObserver';
import useReduceMotion from '~/hooks/useReduceMotion';

interface Props {
  children: React.ReactNode;
}

const AnimatiedContentSection: React.FC<Props> = ({ children }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { isMotionReduced } = useReduceMotion();
  // const { inView } = useIntersectionObserver(ref);

  if (isMotionReduced) {
    return <ContentSection>{children}</ContentSection>;
  }
  return (
    <div ref={ref}>
      <ContentSection>{children}</ContentSection>
    </div>
  );
};

export default AnimatiedContentSection;
