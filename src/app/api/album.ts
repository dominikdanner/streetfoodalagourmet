export const SERVER_URL = process.env.SERVER_URL
export const IMAGE_QUILITY = process.env.IMAGE_QUALITY

export interface Album {
    id: String,
    title: String,
    thumbnail: String
    description: String
    location: String
    date: Date
}

export const getAllAlbums = async () => {
      const response = await fetch(SERVER_URL + "/items/album", {
        mode: 'cors',
      })
      return (await response.json()).data as Album[]
}

export const getAlbum = async (albumId: String) => {
    const response = await fetch(SERVER_URL + "/items/album?filter[id][_eq]=" + albumId, {
    mode: 'cors',
    })
    return (await response.json()).data[0] as Album
}

export interface AlbumFolder {
    id: String
    album_id: String
    folder_id: String
}

export const getAlbumFolder = async (albumId: String) => {
    const response = await fetch(SERVER_URL + "/items/collection?filter[album_id][_eq]=" + albumId, {
    mode: 'cors',
    })
    return (await response.json()).data[0] as AlbumFolder
}

export interface CollectionImage {
    id: String
    title: String
    width: number
    height: number
}

export const getAllAlbumImages = async (folderId: String) => {
    const response = await fetch(SERVER_URL + "/files?filter[folder][_eq]=" + folderId, {
    mode: 'cors',
    })
    return (await response.json()).data as CollectionImage[]
}

