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
  const [imageGrid, setImageGrid] = useState<DirectusImage[][]>([]);

  useEffect(() => {
    if (!images || images.length === 0) return;

    const columns: DirectusImage[][] = [[], [], [], []];
    const columnHeights = [0, 0, 0, 0];

    // Sort images by height (descending) to distribute larger images first
    const sortedImages = [...images].sort((a, b) => b.height - a.height);

    for (const image of sortedImages) {
      // Find the column with the smallest total height
      const shortestColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
      
      // Add image to that column
      columns[shortestColumnIndex].push(image);
      columnHeights[shortestColumnIndex] += image.height;
    }

    setImageGrid(columns);
  }, [images]);

  return imageGrid;
}
