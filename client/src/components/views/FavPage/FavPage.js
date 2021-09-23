import React from 'react'
import { withRouter } from 'react-router-dom'

function FavPage() {

    return (
        <div>
            <h2>What I Liked</h2>
            <p>Movie Title</p>
            <p>Movie Runtime</p>
            <p>Remove</p>
        </div>
    )
}

export default withRouter(FavPage)
