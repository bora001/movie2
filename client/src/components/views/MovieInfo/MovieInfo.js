import React, { useEffect, useState } from 'react'
import { API_KEY } from '../../../MovieApi'
import { withRouter } from 'react-router-dom'
import MovieInfoDetail from './MovieInfoDetail'

import MainImage from '../LandingPage/MovieSection/MainImage'
import {API_URL, IMAGE_URL } from '../../../Config'
import { Row } from 'antd'
import Grid from './../../common/Grid'

import FavoriteBtn from './FavoriteBtn'

function MovieInfo(props) {


    let movieId = props.match.params.movieId

    // MainImage
    const [MainMovieImage, setMainMovieImage] = useState(null)
        const endPoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US&page=1`;

    useEffect(() => {
           fetch(endPoint).then(response => response.json())
            .then(response => {
                        console.log("mian",response)
                        // put info about response.result[0] into MainMovieImage
                setMainMovieImage(response)
                    })
    }, [])
     

    //MovieInfo

    const [Movie, setMovie] = useState([])
    const [Genre, setGenre] = useState([])
    const [Cast, setCast] = useState([])
    const [ViewCast, setViewCast] = useState(false)


    useEffect(() => {

        const castInfo = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
        const movieDetails = `${API_URL}movie/${movieId}?api_key=${API_KEY}`

        fetch(movieDetails)
            .then(response => response.json())
            .then(response => {
                // console.log(response)
                setMovie(response)
        setGenre(response.genres);
            })
        
        fetch(castInfo)
            .then(response => response.json())
            .then(response => {
                setCast(response.cast)
                console.log("crew",response.cast)
        })

    }, [])

    const onViewCast = () =>{
        setViewCast(!ViewCast)
    }

    return (
        <div>
            {MainMovieImage && <MainImage title={MainMovieImage.original_title} rate={MainMovieImage.vote_average} release={MainMovieImage.release_date} desc={MainMovieImage.overview} image={`${IMAGE_URL}w1280${MainMovieImage.backdrop_path}`} />}
            
            <div style={{width:'90%', margin:'0 auto'}}>
                <h2>Movie Info</h2>
                <MovieInfoDetail movie={Movie} genre={Genre} />
                <div className="btn_box" style={{display:'flex',justifyContent:'center', margin:'15px 0'}}>
                    <button onClick={onViewCast}>View Casts</button>
                    <FavoriteBtn movieInfo={Movie} movieId={movieId} />
                </div>
                {ViewCast &&
                <Row gutter={[16, 16]}>
                            {Cast && Cast.map((cast, index) => (
                                <React.Fragment key={index}>
                                    <Grid
                                        image={cast.profile_path ? `${IMAGE_URL}w500${cast.profile_path}` : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png`}
                                        name={cast.name} character={cast.character}
                                    />
                                </React.Fragment>
                            ))}
                    </Row>
                    }
            </div>
        </div>
    )
}

export default withRouter(MovieInfo)
