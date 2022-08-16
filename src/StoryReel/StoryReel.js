import React from 'react'
import { useSelector } from 'react-redux'
import Story from '../Story/Story'
import './StoryReel.css'


function StoryReel(storyrl) {
    const amembers = useSelector((state) => state.mreducers)
    return (

        amembers.filter((names) => names.likecount !== 500000).map((indvstory) =>
            <Story key={indvstory._id} storyrl={indvstory} />
        )
    )
}

export default StoryReel

