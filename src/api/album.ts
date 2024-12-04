export const SERVER_URL = process.env.SERVER_URL;
export const IMAGE_QUILITY = process.env.IMAGE_QUALITY;

export interface Album {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  location: string;
  date: string;
}

export const getAllAlbums = async (): Promise<Album[]> => {
  const response = await fetch(SERVER_URL + "/items/album", {
    mode: "cors",
  });

  return (await response.json()).data;
};

export const getAlbum = async (albumId: String): Promise<Album> => {
  const response = await fetch(
    SERVER_URL + "/items/album?filter[id][_eq]=" + albumId,
    {
      mode: "cors",
    }
  );

  return (await response.json()).data[0];
};

export interface DirectusFolder {
  id: string;
  album_id: string;
  folder_id: string;
}

export const getAlbumFolder = async (
  albumId: String
): Promise<DirectusFolder> => {
  const response = await fetch(
    SERVER_URL + "/items/collection?filter[album_id][_eq]=" + albumId,
    {
      mode: "cors",
    }
  );

  return (await response.json()).data[0];
};

export interface DirectusImage {
  id: string;
  title: string;
  width: number;
  height: number;

  // Not part of the initial Response
  src: string;
}

export const getAllAlbumImages = async (
  folderId: String
): Promise<DirectusImage[]> => {
  const response = await fetch(
    SERVER_URL + "/files?filter[folder][_eq]=" + folderId,
    {
      mode: "cors",
    }
  );

  return ((await response.json()).data as DirectusImage[]).map(
    (image): DirectusImage => ({
      ...image,
      src: SERVER_URL + "/assets/" + image.id + "?quality=" + IMAGE_QUILITY,
    })
  );
};
