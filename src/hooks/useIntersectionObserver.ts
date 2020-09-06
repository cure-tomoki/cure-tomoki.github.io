import * as React from 'react';

const useIntersectionObserver = <T extends HTMLElement>(
  ref: React.MutableRefObject<T | null>,
  callback?: (
    entry: IntersectionObserverEntry,
    observer: IntersectionObserver
  ) => void,
  // eslint-disable-next-line no-undef
  options: IntersectionObserverInit = {}
) => {
  const [inView, setInView] = React.useState(false);

  const [triggered, setTriggered] = React.useState(false);

  React.useEffect(() => {
    const current = ref.current;
    if (current === null) return;

    const IO = new IntersectionObserver(
      (
        entries: IntersectionObserverEntry[],
        _observer: IntersectionObserver
      ) => {
        const entry = entries[0];
        if (entry === undefined) return;
        setTriggered(true);
        setInView(entry.isIntersecting);
        callback && callback(entry, _observer);
      },
      options
    );

    if (!triggered) {
      IO.observe(current);
    }
    return () => {
      if (triggered) {
        IO.unobserve(current);
      }
    };
  }, [ref, options, callback, triggered]);

  return { inView };
};

export default useIntersectionObserver;
