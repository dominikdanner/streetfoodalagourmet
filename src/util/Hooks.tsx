import { DirectusImage } from "@/api/album";
import { useEffect, useState } from "react";

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
  });

  useEffect(() => {
    function handleScrollOffset() {
      setScrollOffset({
        x: window.scrollX as any,
        y: window.scrollY as any,
      });
    }

    window.addEventListener("scroll", handleScrollOffset);

    handleScrollOffset();

    return () => window.removeEventListener("scroll", handleScrollOffset);
  }, []);

  return scrollOffset;
}

export function useGenerateGrid(images: DirectusImage[] | undefined) {
  const [imageGrid, setImageGrid] = useState<DirectusImage[][]>();

  useEffect(() => {
    if (images != undefined) {
      const imagePerColumn = Math.round(images!.length / 4);

      const imageGrid: DirectusImage[][] = [];
      let currentColumn = 0;
      let columnGrid: DirectusImage[] = [];
      images?.map((image, idx) => {
        columnGrid.push(image);

        if (columnGrid.length == imagePerColumn) {
          if (currentColumn == 3) {
            images.splice(0, idx + 1);
            images.map((image) => columnGrid.push(image));
            imageGrid.push(columnGrid);
          } else {
            currentColumn++;
            imageGrid.push(columnGrid);
            columnGrid = [];
          }
        }
      });

      setImageGrid(imageGrid);
    }
  }, [images]);

  return imageGrid;
}
