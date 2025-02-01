"use client";
import Header from "@/components/Header";
import { Headline } from "@/components/Headline";
import { useSearchParams } from "next/navigation";
import React, { FC, Fragment, useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import {
  DirectusFolder,
  DirectusImage,
  getAlbum,
  getAlbumFolder,
  getAllAlbumImages,
} from "@/api/album";
import { useGenerateGrid } from "@/util/Hooks";
import { LoadingScreen } from "@/components/LoadingScreen";

// Top Level Component of album page
export default function Album() {
  return (
    <React.Fragment>
      <Header />
      <ImageGalerieContainer />
      <Footer />
    </React.Fragment>
  );
}

interface ImageGalerieContainerProps extends React.PropsWithChildren {}

const ImageGalerieContainer: FC<ImageGalerieContainerProps> = () => {
  const id = useSearchParams().get("id");
  const { data: folder } = useQuery({
    queryKey: ["album_folder"],
    queryFn: () => {
      return getAlbumFolder(id!);
    },
  });

  const albumId = folder?.album_id;
  const { data: album } = useQuery({
    enabled: !!albumId,
    queryKey: ["album"],
    queryFn: () => {
      return getAlbum(albumId!);
    },
  });

  return (
    <div className="flex flex-col justify-center items-center pt-40 container bg-transparent">
      <Headline>{album?.title}</Headline>
      <ImageGrid folder={folder!} />
    </div>
  );
};

interface ImageGridProps {
  folder: DirectusFolder;
}

const ImageGrid: FC<ImageGridProps> = ({ folder }) => {
  const folderId = folder?.folder_id;

  const { data: images, isLoading: isImagesLoading } = useQuery({
    enabled: !!folderId,
    queryKey: ["album_images"],
    queryFn: () => {
      return getAllAlbumImages(folderId!);
    },
  });

  const imageGrid = useGenerateGrid(images);

  return (
    <Fragment>
      <LoadingScreen enabled={isImagesLoading} />

      <div className="mt-16 grid grid-cols-1 grid-rows-1 items-start md:grid-cols-2 my-5 xl:grid-cols-4">
        {/** Outputs generated Image Grid */}
        {imageGrid?.map((column, idx) => (
          <div
            key={idx}
            className="flex flex-col w-full min-w-96 xl:min-w-60"
          >
            {column.map((image, idx) => (
              <ImageGridItem key={idx} image={image} />
            ))}
          </div>
        ))}
      </div>
    </Fragment>
  );
};

interface ImageGridItemProps {
  image: DirectusImage;
}

const ImageGridItem: FC<ImageGridItemProps> = ({ image }) => {
  return (
    <div className="group relative cursor-pointer m-1">
      <Image
        src={image.src}
        className="object-cover max-w-full max-h-[500px]"
        quality={process.env.IMAGE_QUALITY ? parseInt(process.env.IMAGE_QUALITY) : 100}
        width={image.width}
        height={image.height}
        alt={image.title}
      />
    </div>
  );
};
