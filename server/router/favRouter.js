// import { favorite } from '../models/Favorite'

const express = require('express')
const router = express.Router()
const { favorite } = require('../models/Favorite') 

// front fav server : /api/fav/movieinfo
router.post('/movieinfo', (req, res) => {
    
    favorite.find({ "movieId": req.body.movieId })
        .exec((err, info) => {
            if (err) {
            return res.status(400).send(err)
            } else {
                res.status(200).json({success:true, favNum:info.length})
            }
        })
})

module.exports = router