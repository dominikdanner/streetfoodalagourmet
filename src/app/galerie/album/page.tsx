"use client";
import Header from "@/components/Header";
import { Headline } from "@/components/Headline";
import { useSearchParams } from "next/navigation";
import React, { FC, Fragment, useContext, useReducer, useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import { Album, DirectusImage, getAlbum } from "@/api/album";
import { useGenerateGrid, useWindowSize } from "@/util/Hooks";
import { LoadingScreen } from "@/components/LoadingScreen";
import {
  ImageIndex,
  imageIndexReducer,
  ImageViewer,
  ImageViewerContext,
  ImageViewerState,
} from "@/components/ImageViewer";
import { imagesQueryOptions } from "@/api/queries";

// Top Level Component of album page
export default function AlbumView() {
  // Create a initial state for the image viewer
  const imageViewerState: ImageViewerState = {
    hidden: useState<boolean>(true),
    currentImageIndex: useReducer(imageIndexReducer, [0, 0]),
  };

  // Query album meta data
  const id = useSearchParams().get("id");
  const { data: album } = useQuery({
    queryKey: ["album"],
    queryFn: () => {
      return getAlbum(id!);
    },
  });

  return (
    <ImageViewerContext.Provider value={imageViewerState}>
      <Header />

      {/** Popup Window that displayes images big */}
      {/** Only on Desktop as of now */}
      <ImageViewer album={album!} />

      {/** Image Galerie that shows all images in a grid */}
      <ImageGalerie album={album!} />

      <Footer />
    </ImageViewerContext.Provider>
  );
}

interface ImageGalerieProps extends React.PropsWithChildren {
  album: Album;
}

// Parent Component that holds the ImageGrid
const ImageGalerie: FC<ImageGalerieProps> = ({ album }) => {
  return (
    <div className="flex flex-col justify-center items-center pt-40 container bg-transparent">
      <Headline>{album?.title}</Headline>

      {/** Shows all images in a 4x4 grid on desktop. Fully responsive*/}
      <ImageGrid folderId={album?.folder} />
    </div>
  );
};

interface ImageGridProps {
  folderId: string;
}

// Component that generates a grid of images
const ImageGrid: FC<ImageGridProps> = ({ folderId }) => {
  // Fetch all images of album
  const { data: images, isLoading } = useQuery({
    enabled: !!folderId,
    ...imagesQueryOptions(folderId),
  });

  // Generate sorted image grid
  const imageGrid = useGenerateGrid(images);

  return (
    <Fragment>
      <LoadingScreen enabled={isLoading} />

      <div className="mt-16 grid grid-cols-1 grid-rows-1 items-start md:grid-cols-2 my-5 xl:grid-cols-4">
        {/** Outputs generated Image Grid */}
        {imageGrid?.map((column, colIdx) => (
          <div
            key={colIdx}
            className="flex flex-col w-full min-w-96 xl:min-w-60"
          >
            {column.map((image, rowIdx) => (
              <ImageGridItem
                key={rowIdx}
                image={image}
                index={[colIdx, rowIdx]}
              />
            ))}
          </div>
        ))}
      </div>
    </Fragment>
  );
};

interface ImageGridItemProps {
  image: DirectusImage;
  index: ImageIndex;
}

// Singel image in the grid
const ImageGridItem: FC<ImageGridItemProps> = ({ image, index }) => {
  // Get all states from context
  const { currentImageIndex, hidden } = useContext(ImageViewerContext);
  const [, updateCurrentImageIndex] = currentImageIndex;
  const [, setImageViewerHidden] = hidden;

  const windowSize = useWindowSize();

  return (
    <div
      className="group relative cursor-pointer m-1 transition-all lg:hover:scale-110 lg:hover:z-20 lg:hover:drop-shadow-lg"
      onClick={() => {
        updateCurrentImageIndex({ type: "set_index", index });

        // Only show image viewer if window is big enough
        // Basically deactivates the image viewer on mobile
        windowSize.width! >= 1100 ? setImageViewerHidden(false) : null;
      }}
    >
      <Image
        src={image.src}
        className="object-cover max-w-full max-h-[500px] lg:hover:rounded-md"
        quality={
          process.env.IMAGE_QUALITY ? parseInt(process.env.IMAGE_QUALITY) : 100
        }
        width={image.width}
        height={image.height}
        alt={image.title}
      />
    </div>
  );
};
