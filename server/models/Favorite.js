const mongoose = require('mongoose');
const favSchema = mongoose.Schema({
    theUser: {
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    movieId: {
        type:String
    },
    movieTitle: {
        type:String
    },
    moviePost: {
        type:String
    },
    movieRuntime: {
        type:String
    }

},{timestampes:true})

const favorite = mongoose.model('Favorite', favSchema)
module.exports = {favorite}