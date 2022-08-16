import express from 'express'


import { getFeeds, likePost, createPost, uploadPost } from '../controller/controllerfb.js'

const router = express.Router();

router.get('/', getFeeds);
router.patch('/:id/', likePost)
router.post('/', createPost)
router.post('/images', uploadPost)

export default router


