import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { withRouter } from 'react-router-dom'
import { IMAGE_URL } from '../../../Config'

function FavPage() {

    const [Favorites, setFavorites] = useState([])

    useEffect(() => {
        getFav()
    }, [])

    function getFav() {
        axios.post('/api/fav/getFav', {theUser: document.cookie.split('=')[1]})
            .then(response => {
                if (response.data.success) {
                    setFavorites(response.data.favorites)
                } else {
                    alert('failed to get your favorite movies')
                }
            })
    }

    function onDeleteFav(movie) {
      axios.post('/api/fav/deleteFav', movie)
            .then(response => {
                if (response.data.success) {
                     getFav()
                } else {
                    alert('failed to get your favorite movies')
                }
            })
    }

    return (
        <div>
            <h2>Favorite Movies</h2>
            {Favorites && Favorites.map((movie, index) => (
                <React.Fragment key={index}>
                    <img src={`${IMAGE_URL}w400${movie.moviePic}`} alt={movie.movieTitle}/>
                        <p>{movie.movieTitle}</p>
                        <p>{movie.movieRuntime}</p>
                    <button onClick={()=>onDeleteFav(movie)}>Remove</button>
                </React.Fragment>
            ))}
        </div>
    )
}

export default withRouter(FavPage)
