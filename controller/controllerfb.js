import express from 'express'
import mongoose from 'mongoose';
import FeedComment from '../models/feedsmodel.js'


const router = express.Router();

export const getFeeds = async (req, res) => {
    try {

        const feedComments = await FeedComment.find();
        res.status(200).json(feedComments)
    }
    catch (error) {
        res.status(404).json({ message: error.messages })
    }

}


/*
export const createFeeds = async (req, res) => {

    const ncomments = req.body
    console.log('Create Feeds on controller posts', ncomments)
    const newComments = new FeedComment(ncomments)

    console.log('SAVING on controller', newComments)
    try {

        await newComments.save();

        res.status(201).json(newComments)


    }
    catch (error) {

        res.status(404).json({ message: error.messages })

    }
}

*/
export const likePost = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Post with that id')

        const post = await FeedComment.findById(id);

        const updatePost = await FeedComment.findByIdAndUpdate(id, { likecount: post.likecount + 1 }, { new: true })


        res.status(200).json(updatePost)
    }
    catch (error) {
        res.status(404).json({ message: error.messages })
    }

}


export const createPost = async (req, res) => {
    const createPost = req.body
    const newPost = new FeedComment(createPost);

    try {

        await newPost.save()
        res.status(201).json(newPost)

    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}


export const updatePost = async (req, res) => {
    try {
        const { id: _id } = req.params;
        const upost = req.body;
        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Post with that id')

        const updatePost = await FeedComment.findByIdAndUpdate(_id, { ...upost, _id }, { new: true })
        res.status(200).json(updatePost)
    }
    catch (error) {
        res.status(404).json({ message: error.messages })
    }
}


export const uploadPost = async (req, res) => {
    try {
        const uposts = req.files;

        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Post with that id')
        uposts.mv("./images" + uposts.name)
        res.status(200).json(uploadPost)
    }
    catch (error) {
        res.status(404).json({ message: error.messages })
    }
}




export default router;