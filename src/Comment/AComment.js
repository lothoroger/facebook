import React from 'react'
import { Avatar } from '@material-ui/core'

function aComment(onecomm) {


    return (

        <div className="comment_top">
            <Avatar src={require(`../images/${onecomm.onecomm.commentavatar}`)} alt={onecomm.onecomm.commentname} />
            <div className="comment_row1">
                {onecomm.onecomm.commentmessage}
            </div>
        </div>
    )
}

export default aComment