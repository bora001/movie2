// import { favorite } from '../models/Favorite'
const express = require('express')
const router = express.Router()
const { favorite } = require('../models/Favorite') 

// front fav server : /api/fav/fav-num    /api/fav/favorited

router.post('/fav-num', (req, res) => {
    
    favorite.find({ "movieId": req.body.movieId })
        .exec((err, info) => {
            if (err) {
            return res.status(400).send(err)
            } else {
                res.status(200).json({success:true, favNum:info.length})
            }
        })
})

router.post('/favorited', (req, res) => {
    favorite.find({ "movieId": req.body.movieId , "userFrom" : req.body.userFrom })
        .exec((err, info) => {
            if (err) {
                return res.status(400).send(err)
            } else {
                console.log("info",info)
                let favResult = false
                if (info.length !== 0) {
                    favResult = true
                }
                res.status(200).json({success:true, favorited: favResult})
            }
        })
})

router.post('/addFav', (req, res) => {
    // console.log(req.body)
    const newFav = new favorite(req.body);

    newFav.save((err, doc) => {
        if (err) {
            return res.status(400).send(err)
        }
        return res.status(200).json({success : true})
    })
})


router.post('/removeFav', (req, res) => {
    console.log("the revmoe???", req.body)
    favorite.findOneAndDelete({ movieID: req.body.movieId, theUser: req.body.theUser })
        .exec((err, doc) => {
            if (err) {
            return res.status(400).send(err)
            }
            return res.status(200).json({success:true, doc})
    })
})


module.exports = router