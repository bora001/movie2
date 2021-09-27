import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import "./LandingPage.css"

import { API_URL, IMAGE_URL } from '../../../Config'
import MainImage from './MovieSection/MainImage'
import Grid from './../../common/Grid'
import { Row } from 'antd';

let status = {
        loginStatus:false
    };

function LandingPage(props) {

    const [Movies, setMovies] = useState([])
    const [MainMovieImage, setMainMovieImage] = useState(null)
    const [loadPage, setloadPage] = useState(0)
    let API_KEY = '';

    useEffect(() => {

        axios.get('/api/auth')
            .then(response => {
            console.log("landing get auth",response)
            if (response.data.isAuth) {
                status.loginStatus = true
            } else {
                status.loginStatus = false
            }
        })

        //get api
            axios.post('/api/movieapi')
                .then(response => {
                    API_KEY = response.data
                    const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
                    fetchMovie(endPoint)
            })
        
    }, [])
    
    const fetchMovie = (endPoint) => {
        fetch(endPoint).then(response => response.json())
                    .then(response => {
                        setMovies([...Movies, ...response.results])
                        // put info about response.result[0] into MainMovieImage
                        setMainMovieImage(response.results[0])
                        setloadPage(response.page)
                    })
    }
    
    const onLogoutHandler = () => {
        axios.get(`/api/logout`)
        .then(response => {
            if (response.data.success) {
                props.history.push("/login")
            } else {
                alert("failed to logout")
            }
        })

    }

    const onloadHandler = () => {
        const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${loadPage + 1}`;
        fetchMovie(endPoint)

    }

    return (
        <div className="landing_page">
            <div className="intro_box">
                <h2>Thank you for visiting !</h2>
                <div className="btn_box">
                    {status.loginStatus
                        ?<div>
                            <button onClick={onLogoutHandler}>LOGOUT</button>
                            <button><a href="/fav">FAVORITE</a></button>
                        </div>
                        :
                        <div >
                            <button><a href="/register">REGISTER</a></button>
                            <button><a href="/login">LOGIN</a></button>
                        </div>}
                </div>
            </div>

            <div className="movie_box">
                <div className="latest_movie">
                    
                    {MainMovieImage && <MainImage title={MainMovieImage.original_title} rate={MainMovieImage.vote_average} release={MainMovieImage.release_date} desc={MainMovieImage.overview} image={`${IMAGE_URL}w1280${MainMovieImage.backdrop_path}`}/>}
                    <h2>Moive by Latest</h2>
                    {/* gutter is padding */}
                    <Row gutter={[16, 16]}>
                        {Movies && Movies.map((movie, index) => (
                            <React.Fragment key={index}>
                                <Grid
                                    landingpage
                                    image={movie.poster_path ? `${IMAGE_URL}w500${movie.poster_path}` : null}
                                    movieId={movie.id}
                                    title={movie.title}
                                />
                            </React.Fragment>
                        ))}
                    </Row>

                    <button className="btn_load" onClick={onloadHandler}>Load More</button>
                </div>

            </div>


        </div>
    )
}

export default withRouter(LandingPage)