import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Feed.css'
import StoryReel from '../StoryReel/StoryReel'
import MessageSender from '../MessageSender/MessageSender'
import Post from '../Post/Post'
import { feedPost } from '../actions/actionpost'



function Feed() {
    const amembers = useSelector((state) => state.mreducers)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(feedPost())
    }, [dispatch])

    return (
        <div className="feed_top" >
            <div className="sr_top">
                <StoryReel storyrl={amembers} />
            </div>
            <MessageSender />
            <Post key={amembers._id} posts={amembers} />
        </div>

    )
}

export default Feed

