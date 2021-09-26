import React from 'react'
import { Descriptions } from 'antd'

function MovieInfoDetail(props) {
    const { movie } = props
    const { genre } = props

    return (
        <Descriptions bordered>
            <Descriptions.Item label="Title">{movie.title}</Descriptions.Item>
            <Descriptions.Item label="Release">{movie.release_date}</Descriptions.Item>
            <Descriptions.Item label="Runtime">{movie.runtime}minutes</Descriptions.Item>
            <Descriptions.Item label="Rating">{movie.vote_average}/10</Descriptions.Item>
            <Descriptions.Item label="Genre">{genre.map((genre, index) => { return <span key={index}>{genre.name} </span> })}</Descriptions.Item>
        </Descriptions>
    )
}
export default MovieInfoDetail
