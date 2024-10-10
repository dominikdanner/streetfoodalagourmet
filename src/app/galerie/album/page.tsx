"use client";
import Header from "@/components/Header";
import { Headline } from "@/components/Headline";
import { useSearchParams } from "next/navigation";
import React, {
  FC,
  useState,
} from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import {
  DirectusFolder,
  DirectusImage ,
  getAlbum,
  getAlbumFolder,
  getAllAlbumImages,
} from "@/api/album";
import { useGenerateGrid } from "@/util/Hooks";

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
  const [isBigViewExpanded, setBigViewExpanded] = useState(false);

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
      {isBigViewExpanded ? (
        <div className="fixed w-screen h-screen bg-black bg-opacity-30 z-50 top-0">
          <div className="fixed w-2/3 h-2/3 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg z-50">
            <div className="flex justify-end items-center p-10">
              <div
                className="absolute flex flex-col justify-center items-center w-20 h-20 cursor-pointer"
                onClick={() => setBigViewExpanded(false)}
              >
                <div className="w-10 h-1 bg-black rounded-lg rotate-45 translate-y-1"></div>
                <div className="w-10 h-1 bg-black rounded-lg -rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <Headline>{album?.title}</Headline>
      <ImageGrid folder={folder!} />
    </div>
  );
};

interface ImageGridProps {
  folder: DirectusFolder
}

const ImageGrid: FC<ImageGridProps> = ({ folder }) => {
  const folderId = folder?.folder_id;

  const { data: images } = useQuery({
    enabled: !!folderId,
    queryKey: ["album_images"],
    queryFn: () => {
      return getAllAlbumImages(folderId!);
    },
  });

  const imageGrid = useGenerateGrid(images)

  return (
      <div className="mt-10 grid grid-cols-1 grid-rows-1 gap-4 items-start md:grid-cols-2 md:gap-1 my-5 xl:grid-cols-4">
        {/** Display generated Image Grid */}
        {imageGrid?.map((column, idx) => (
          <div
            key={idx}
            className="flex flex-col w-full gap-2 px-1 min-w-96 xl:min-w-60"
          >
            {column.map((image, idx) => (
              <ImageGridItem key={idx} image={image} />
            ))}
          </div>
        ))}
      </div>
  )
}

interface ImageGridItemProps {
  image: DirectusImage
}

const ImageGridItem: FC<ImageGridItemProps> = ({ image }) => {
  return (
    <div className="group relative w-full h-fit object-contain cursor-pointer">
      <Image
        src={image.src as string}
        width={image.width}
        height={image.height}
        alt={image.title as string}
      />
    </div>
  );
};
