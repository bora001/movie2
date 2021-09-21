import React, { useEffect } from 'react'
import axios from 'axios'

function FavoriteBtn(props) {

    console.log("props",props)
    const movieId = props.movieId
    const movieTitle = props.movieInfo.title
    const moviePic = props.movieInfo.backdrop_path
    const movieRuntime = props.movieInfo.runtime
    const userFrom = document.cookie.split('=')[1]

    let favDetail = {
        userFrom,
        movieId
    }

    useEffect(() => {

        //axios->post-> the address for the server
        axios.post('/api/fav/movieinfo', favDetail)
            .then(response => {

                    console.log(response.data)

                if (response.data.success) {
                
                } else {
                    alert('failed to get your favorite information')
            }
        })
    }, [])

    return (
        <div>
            <button style={{ position: "relative", width: '100px',paddingRight:'25px',backgroundColor:"rgb(233, 76, 76)"}}>Like<span style={{position:'absolute',margin:'-1px 5px 0'}}>👍</span></button>
        </div>
    )
}

export default FavoriteBtn
