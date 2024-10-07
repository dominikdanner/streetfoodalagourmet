"use client";
import Header from "@/app/components/Header";
import { Headline } from "@/app/components/Headline";
import { useSearchParams } from "next/navigation";
import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  CollectionImage,
  getAlbum,
  getAlbumFolder,
  getAllAlbumImages,
  IMAGE_QUILITY,
  SERVER_URL,
} from "@/app/api/album";

interface ImageGalerieContext {
  imageData: StaticImport | undefined;
}

const ImageGalerieContext = createContext<ImageGalerieContext>({
  imageData: undefined,
});

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

const ImageGalerieContainer: FC<ImageGalerieContainerProps> = ({
  children,
}) => {
  const [isBigViewExpanded, setBigViewExpanded] = useState(false);
  const [imageGrid, setImageGrid] = useState<CollectionImage[][]>();

  const id = useSearchParams().get("id");
  const { data: albumFolder } = useQuery({
    queryKey: ["album_folder"],
    queryFn: () => {
      return getAlbumFolder(id!);
    },
  });

  const albumId = albumFolder?.album_id;
  const folderId = albumFolder?.folder_id;

  const { data: album } = useQuery({
    queryKey: ["album"],
    queryFn: () => {
      return getAlbum(albumId!);
    },
    enabled: !!albumId,
  });

  const { data: albumImages, isLoading } = useQuery({
    queryKey: ["album_images"],
    queryFn: () => {
      return getAllAlbumImages(folderId!);
    },
    enabled: !!folderId,
  });

  useEffect(() => {
    if (!isLoading) {
      const imagePerColumn = Math.round(albumImages!.length / 4);

      const imageGrid: CollectionImage[][] = [];
      let currentColumn = 0;
      let columnGrid: CollectionImage[] = [];
      albumImages?.map((image, idx) => {
        columnGrid.push(image);

        if (columnGrid.length == imagePerColumn) {
          if (currentColumn == 3) {
            albumImages.splice(0, idx + 1);
            albumImages.map((image) => columnGrid.push(image));
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
  }, [albumImages]);

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
      <div className="mt-10 grid grid-cols-1 grid-rows-1 gap-4 items-start md:grid-cols-2 md:gap-1 my-5 xl:grid-cols-4">
        {/** Display generated Image Grid */}
        {imageGrid?.map((column, idx) => (
          <div
            key={idx}
            className="flex flex-col w-full gap-2 px-1 min-w-96 xl:min-w-60"
          >
            {column.map((image, idx) => (
              <ImageItem key={idx} image={image} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

interface ImageItemProps {
  image: CollectionImage;
}

const ImageItem: FC<ImageItemProps> = ({ image }) => {
  return (
    <div className="group relative w-full h-fit object-contain cursor-pointer">
      <Image
        src={SERVER_URL + "/assets/" + image.id + "?quality=" + IMAGE_QUILITY}
        width={image.width}
        height={image.height}
        alt={image.title as string}
      ></Image>
    </div>
  );
};
