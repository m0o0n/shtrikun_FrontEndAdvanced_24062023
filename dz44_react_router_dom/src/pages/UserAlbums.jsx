import { useEffect } from "react"
import { useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import { fetchUserAlbums } from "../api/albums"

const UserAlbums = () => {
    const { userId } = useParams()
    const [albums, setAlbums] = useState([])
    const getUserAlbums = async () => {
        const {data} = await fetchUserAlbums(userId)
        setAlbums(data)
    }
    useEffect(()=> {
        getUserAlbums()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="user_albums">
            {
                albums.map(({id, title}) => {
                 return (
                    <div key={id}>
                        <h3>{title}</h3>
                        <NavLink to={`/albums/${id}/photos`}>See album photos</NavLink>
                    </div>
                 )   
                })
            }
        </div>
    )
}

export default UserAlbums