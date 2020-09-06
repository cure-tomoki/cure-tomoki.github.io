import * as React from 'react';

import ContentSection from '~/atoms/ContentSection';
import useIntersectionObserver from '~/hooks/useIntersectionObserver';
import useReduceMotion from '~/hooks/useReduceMotion';

interface Props {
  children: React.ReactNode;
}

const AnimatiedContentSection: React.FC<Props> = ({ children }) => {
  const [triggerd, setTriggered] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const { isMotionReduced } = useReduceMotion();
  const { inView } = useIntersectionObserver(ref, undefined, {
    rootMargin: '-50px',
  });

  React.useEffect(() => {
    if (inView) {
      setTriggered(true);
    }
  }, [inView]);

  if (isMotionReduced) {
    return <ContentSection>{children}</ContentSection>;
  }

  return (
    <div
      ref={ref}
      style={{ transition: 'opacity 0.3s', opacity: triggerd ? 1 : 0.1 }}
    >
      <ContentSection>{children}</ContentSection>
    </div>
  );
};

export default AnimatiedContentSection;
