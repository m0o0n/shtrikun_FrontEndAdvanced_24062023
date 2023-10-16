import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { fetchAlbumPhotos } from "../api/albums"

const AlbumPhotos = () => {
    const { albumId } = useParams()
    const [photos, setPhotos] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const getAlbumPhotos = async () => {
        try{
            const {data} = await fetchAlbumPhotos(albumId)
            setIsLoading(false)
            setPhotos(data)
        } catch (e){

        }
    }
    useEffect(()=>{
        getAlbumPhotos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="album_photos">
            {
                isLoading 
                ? <p>Loading...</p>
                : photos.map(({id, thumbnailUrl, title}) => (
                    <div key={id}>
                        <img src={thumbnailUrl} alt={title}/>
                    </div>
                ))
            }
        </div>
    )
}

export default AlbumPhotos