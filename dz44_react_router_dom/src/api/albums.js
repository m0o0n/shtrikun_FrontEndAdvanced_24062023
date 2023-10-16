import { baseInstance } from "."

export const fetchUserAlbums = async (id) => {
    const data = await baseInstance.get(`users/${id}/albums`)
    return data
}

export const fetchAlbumPhotos = async (id) => {
    const data = await baseInstance.get(`albums/${id}/photos`)
    return data
}