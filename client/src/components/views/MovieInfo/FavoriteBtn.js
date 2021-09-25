import React, { useEffect, useState } from 'react'
import axios from 'axios'

function FavoriteBtn(props) {

    // console.log("props",props)
    const movieId = props.movieId
    const movieTitle = props.movieInfo.title
    const moviePic = props.movieInfo.backdrop_path
    const movieRuntime = props.movieInfo.runtime
    const theUser = document.cookie.split('=')[1]

    const [FavNum, setFavNum] = useState(0)
    const [Faved, setFaved] = useState(false)

    let favDetail = {
        theUser,
        movieId,
        movieTitle,
        moviePic,
        movieRuntime
    }
    
    useEffect(() => {
        getFavNum()
        getFav()
        // checkFav()
    }, [])

    
    function getFav() {
        axios.post('/api/fav/getFav', {theUser: document.cookie.split('=')[1]})
            .then(response => {
                if (response.data.success) {
                    if (response.data.favorites.length == 1) {
                        console.log("you you did")
                        setFaved(true)
                    } else {
                        setFaved(false)
                    }
                } else {
                    alert('failed to get your favorite movies')
                }
            })
    }

    // function checkFav() {
    //     axios.post('/api/fav/favorited', favDetail)
    //     .then(response => {
    //         setFaved(response.favorited)
    //         if (response.data.success) {
    //             setFaved(response.data.favorited)
    //         } else {
    //             alert('failed to get your favorite information')
    //         }
    //     })    
    // }

    function getFavNum() {
        axios.post('/api/fav/fav-num', favDetail)
        .then(response => {
            if (response.data.success) {
                console.log(response.data)
                setFavNum(response.data.favNum)
            } else {
                alert('failed to get your favorite information')
            }
        })
    }
 
    function onFavBtn() {
        if (!theUser) {
            alert('To like this movie, Please Login')
        } else {
            if (Faved) {
                axios.post('/api/fav/removeFav', favDetail)
                    .then(response => {
                        if (response.data.success) {
                            console.log(response.data,"remove")
                            setFaved(!Faved)
                            setFavNum(FavNum - 1)
                        } else {
                            alert("failed to add")
                        }
                    })
            }else{
                axios.post('/api/fav/addFav', favDetail)
                    .then(response => {
                        if (response.data.success) {
                            setFaved(!Faved)
                            setFavNum(FavNum + 1)
                        } else {
                            alert("failed to remove")
                        }
                })
            }
        }
    }

    return (
        <div>
            <button onClick={onFavBtn} style={{ position: "relative", width: '100px', paddingRight: '25px', backgroundColor: "rgb(233, 76, 76)" }}>
            {Faved? ` Liked ${FavNum}`: 'like it?'}
            </button>
        </div>
        
    )
}

export default FavoriteBtn