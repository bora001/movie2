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

        //axios->post-> the address for the server
        axios.post('/api/fav/fav-num', favDetail)
            .then(response => {
                // console.log(response.data)
                setFavNum(response.data.favNum)

                if (response.data.success) {
                } else {
                    alert('failed to get your favorite information')
                }
            })

        
        axios.post('/api/fav/favorited', favDetail)
                .then(response => {
                    setFaved(response.favorited)
                    if (response.data.success) {
                    // console.log('favorite',response.data)
                    } else {
                        alert('failed to get your favorite information')
                    }
                })    

    }, [])

 
    function onFavBtn() {
    
            if (Faved) {
                axios.post('/api/fav/removeFav', favDetail)
                    .then(response => {
                        if (response.data.success) {
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
    return (
        <div>
            <button onClick={onFavBtn} style={{ position: "relative", width: '100px', paddingRight: '25px', backgroundColor: "rgb(233, 76, 76)" }}>
                {Faved? ` Liked ${FavNum}`: 'like it?'}
                {/* Like<span style={{ position: 'absolute', margin: '-1px 5px 0' }}>👍</span> */}
            </button>
        </div>
    )
}

export default FavoriteBtn