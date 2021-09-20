import React from 'react'
import { Col } from 'antd'

function Grid(props) {
    return (
        // 24 is default
        <Col lg={6} md={8} xs={24}>
            <div style={{position:'relative'}}>
                <a href={`/movie/${props.movieId}`}>
                    <img src={props.image} alt={props.title}
                        style={{width:"100%",height:"100%"}}/>
                </a>
            </div>
        </Col>
    )
}

export default Grid
