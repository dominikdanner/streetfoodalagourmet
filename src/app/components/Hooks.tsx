import { PropsWithChildren, useEffect, useRef, useState } from "react";

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth as any,
        height: window.innerHeight as any,
      });
    }
    
    window.addEventListener("resize", handleResize);
     
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export function useScrollOffset() {
  const [scrollOffset, setScrollOffset] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    function handleScrollOffset() {
      setScrollOffset({
        x: window.scrollX as any,
        y: window.scrollY as any,
      })
    }

    window.addEventListener("scroll", handleScrollOffset);

    handleScrollOffset()

    return () => window.removeEventListener("scroll", handleScrollOffset)
  }, [])

  return scrollOffset
}
