import React from 'react'
import { Avatar } from '@material-ui/core'

import './Story.css'


function Story(storyl) {
    const reelbg = storyl.storyrl.reelimage
    return (
        <div style={{ backgroundImage: `url(${reelbg})` }} className="story" >
            <Avatar src={storyl.storyrl.commentavatar} className="story_avatar" />
            <h4>{storyl.storyrl.commentname}</h4>
        </div>


    )
}

export default Story;