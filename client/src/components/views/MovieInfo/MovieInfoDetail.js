import React from 'react'
import { Descriptions, Badge } from 'antd'

function MovieInfoDetail(props) {
    const { movie } = props
    const { genre } = props

    return (

        <Descriptions bordered>
            <Descriptions.item label="Title">{movie.title}</Descriptions.item>
            <Descriptions.item label="Release">{movie.release_date}</Descriptions.item>
            <Descriptions.item label="Runtime">{movie.runtime}minutes</Descriptions.item>
            <Descriptions.item label="Rating">{movie.vote_average}/10</Descriptions.item>
            <Descriptions.item label="Genre">{genre.map((genre,index) => { return <span key={index}>{genre.name} </span> })}</Descriptions.item>
        </Descriptions>
    )
}


export default MovieInfoDetail
