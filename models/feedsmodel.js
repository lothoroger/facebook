import mongoose from 'mongoose'


const feedsSchema = mongoose.Schema({

    title: String,
    message: String,
    create: String,
    commentavatar: String,
    commentname: String,
    commentimage: String,
    commentmessage: String,
    reelimage: String,
    tag: String,
    likecount: {
        type: Number,
        default: 500000
    },
    createdAt: Date,
    storyReels: {
        profileSrc: String,
        title: String,
        savatar: String,
        name: String
    },

})

const FeedComment = mongoose.model('fbcomments', feedsSchema)

export default FeedComment;


