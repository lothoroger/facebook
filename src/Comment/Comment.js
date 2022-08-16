import React from 'react'
import '../Comment/Comment.css'
import { Avatar } from '@material-ui/core'


function Comment(commentsub) {

    return (

        <div className="comment_top">
            {/* <Avatar src={require(`../images/rand${Math.floor(Math.random() * 3)}.jpg`)} alt='Commenter' /> */}

            <Avatar src={commentsub.commentsub.commentavatar} alt='Commenter' />

            <div className="comment_row1">
                {commentsub?.commentsub?.commentmessage}
            </div>

        </div>
    )

}

export default Comment

