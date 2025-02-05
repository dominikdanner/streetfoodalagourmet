import { getAlbum, getAllAlbumImages, getAllAlbums } from "@/api/album";
import { queryOptions } from "@tanstack/react-query"

export const albumQueryOptions = (albumId: string) => {
    return queryOptions({
        queryKey: ["album"],
        queryFn: () => getAlbum(albumId)
    })
}

export const allAlbumQueryOptions = () => {
    return queryOptions({
        queryKey: ["albums"],
        queryFn: () => getAllAlbums() 
    })
}

export const imagesQueryOptions = (folderId: string) => {
    return queryOptions({
        queryKey: ["images"],
        queryFn: () => getAllAlbumImages(folderId)
    })
}