import { Album, DirectusImage, getAllAlbumImages } from "@/api/album";
import { useGenerateGrid, useWindowSize } from "@/util/Hooks";
import { useQuery } from "@tanstack/react-query";
import { Dispatch, FC, Fragment, SetStateAction, useContext } from "react";
import { Button, InvertedButton } from "./Buttons";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "./Icons";
import { createContext } from "react";
import { imagesQueryOptions } from "@/api/queries";

export const ImageViewerContext = createContext<ImageViewerState>(
  undefined as any
);
export type ImageIndex = [number, number];

// Stores the current image index into the directus image array
type SetState<T> = [T, Dispatch<SetStateAction<T>>];

export type ImageViewerState = {
  hidden: SetState<boolean>;
  currentImageIndex: [ImageIndex, Dispatch<ImageGridAction>];
};

interface ImageViewerProps {
  album: Album;
}

export const ImageViewer: FC<ImageViewerProps> = ({ album }) => {
  // Get all states from context
  const { currentImageIndex, hidden } = useContext(ImageViewerContext);
  const [[column, row], dispatchImageIndex] = currentImageIndex;
  const [isImageViewerHidden, setImageViewerHidden] = hidden;

  // Fetch all images of album
  const { data: images } = useQuery({
    enabled: !!album,
    ...imagesQueryOptions(album?.folder),
  });

  // Generate sorted image grid
  const imageGrid = useGenerateGrid(images);

  return (
    <Fragment>
      {isImageViewerHidden ? null : (
        <div className="fixed flex justify-center items-center w-screen h-screen bg-black bg-opacity-50 z-40 inset-0">
          <div className="container h-[95%] flex-col justify-center items-center bg-white rounded-md">
            <div className="h-16 lg:h-20 flex justify-around items-center">
              <InvertedButton
                onClick={() => {
                  //TODO: Implement download
                }}
              >
                Download
              </InvertedButton>
              <h1 className="font-bold">Image Viewer</h1>
              <Button onClick={() => setImageViewerHidden(true)}>Exit</Button>
            </div>
            <div className="h-full flex justify-center items-center bg-gray-200 rounded-bl-md rounded-br-md pb-20">
              <div
                onClick={() =>
                  // Dispatch state change to go one image back
                  dispatchImageIndex({ type: "previous", grid: imageGrid })
                }
                className="flex justify-center items-center cursor-pointer text-center w-full max-w-20"
              >
                <ArrowLeftIcon height={50} width={50} />
              </div>
              <div className="flex justify-center items-center w-full h-full select-none">
                <Image
                  className="object-contain h-full max-w-full py-0 lg:py-5"
                  src={imageGrid[column][row].src}
                  quality={
                    process.env.IMAGE_QUALITY
                      ? parseInt(process.env.IMAGE_QUALITY)
                      : 100
                  }
                  width={imageGrid[column][row].width}
                  height={imageGrid[column][row].height}
                  alt={imageGrid[column][row].title}
                />
              </div>
              <div
                onClick={() =>
                  // Dispatch state change to go one image forward
                  dispatchImageIndex({ type: "next", grid: imageGrid })
                }
                className="flex justify-center items-center cursor-pointer text-center w-full max-w-20"
              >
                <ArrowRightIcon height={50} width={50} />
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

/**
 * Increments a two dimensional index by one
 * It doesn't allow the index to go lower than [0, 0] and above the size of the grid
 * Therefore it prevents index out of bound errors
 */
const decrementIndex = (index: ImageIndex, rowLength: number): ImageIndex => {
  const [col, row] = index;
  return row === 0
    ? col === 0
      ? [0, 0]
      : [col - 1, rowLength - 1]
    : [col, row - 1];
};

/**
 * Increments a two dimensional index by one
 * It doesn't allow the index to go lower than [0, 0] and above the size of the grid
 * Therefore it prevents index out of bound errors
 */
const incrementIndex = (
  index: ImageIndex,
  rowLength: number,
  colLength: number
): ImageIndex => {
  const [col, row] = index;
  return row === rowLength - 1
    ? col === colLength - 1
      ? [col, row]
      : [col + 1, 0]
    : [col, row + 1];
};

type ImageGridAction = {
  type: "next" | "previous" | "set_index";
  index?: ImageIndex;
  grid?: DirectusImage[][];
};

/**
 * Represents state change of the when user clicks next image or previous image
 * Insures that the index is always within the bounds of the grid
 */
export const imageIndexReducer = (
  state: ImageIndex,
  action: ImageGridAction
): ImageIndex => {
  switch (action.type) {
    case "next":
      return incrementIndex(
        state,
        action.grid![state[0]].length,
        action.grid!.length
      );
    case "previous":
      return decrementIndex(state, action.grid![state[0]].length);
    case "set_index":
      if (action.index) {
        return action.index;
      } else {
        throw new Error("No index provided");
      }
    default:
      return state;
  }
};
