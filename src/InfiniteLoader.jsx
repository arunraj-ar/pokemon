import { useEffect, useRef, useState } from "react";

export const InfiniteLoader = (props) => {
  const { api = null } = props;
  const [isObserverLoaded, setIsObserverLoaded] = useState(false);
  const loaderRef = useRef(null);

  useEffect(() => {
    if (typeof api === "function" && !isObserverLoaded) {
      setIsObserverLoaded(true);
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              typeof api === "function" && api();
            }
          });
        },
        { root: null, rootMargin: "0px", threshold: 1 }
      );

      loaderRef.current && observer.observe(loaderRef.current);

      return () => {
        loaderRef.current && observer.unobserve(loaderRef.current);
      };
    }
  }, []);

  return (
    <div className="p-12">
      <img ref={loaderRef} src="infinite-spinner.svg" className="w-16 h-8" />
    </div>
  );
};
