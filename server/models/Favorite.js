const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favSchema = mongoose.Schema({
    theUser: {
        type: String,
    },
    movieId: {
        type: String
    },
    movieTitle: {
        type: String
    },
    moviePost: {
        type: String
    },
    movieRuntime: {
        type: String
    },
    moviePic:{
        type:String
    }

},{timestampes:true})

const favorite = mongoose.model('Favorite', favSchema)
module.exports = {favorite}