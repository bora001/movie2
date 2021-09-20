import React, { useEffect } from 'react'
import { API_URL } from '../../../Config'
import { API_KEY } from '../../../MovieApi'
function MovieInfo(props) {

    let movieId = props.match.params.movieId

    useEffect(() => {
        fetch(`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`)
            .then(response => response.json())
            .then(response => {
            console.log(response)
        })

    }, [])

    return (
        <div>
            
        </div>
    )
}

export default MovieInfo
