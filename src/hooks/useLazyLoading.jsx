import { useState, useEffect } from "react";

const useLazyLoading = (ref) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== "undefined"
        ? window.IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      const observer = new window.IntersectionObserver(
        (entries) => {
          const { isIntersecting } = entries[0];
          if (isIntersecting) {
            setShow(true);
            observer.disconnect();
          }
        },
        {
          threshold: 0.5,
        }
      );
      observer.observe(ref.current);
    });
  }, [ref]);
  return { show };
};

export default useLazyLoading;
