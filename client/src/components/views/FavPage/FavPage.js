import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { withRouter } from 'react-router-dom'
import { API_URL, IMAGE_URL } from '../../../Config'

function FavPage() {

    const [Favorites, setFavorites] = useState([])

    useEffect(() => {

        axios.post('/api/fav/getFav', {theUser: document.cookie.split('=')[1]})
            .then(response => {
                if (response.data.success) {
                    setFavorites(response.data.favorites)
                } else {
                    alert('failed to get your favorite movies')
                }
            })
    }, [])


    return (
        <div>
            <h2>Favorite Movies</h2>
                
               {Favorites && Favorites.map((movie, index) => (
                   <>
                        <img src={ `${IMAGE_URL}w500${movie.moviePic}`} />
                        <p>{movie.movieTitle}</p>
                        <p>{movie.movieRuntime}</p>
                    </>
               ))}
                    
                    <p>Remove</p>
                </div>
            
    )
}

export default withRouter(FavPage)
