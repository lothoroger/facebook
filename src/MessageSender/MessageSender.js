import React, { useState } from 'react'
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/VideoCall'
import './MessageSender.css'
import { now } from 'moment'
import { getPost, createPost } from '../actions/actionpost';
import { useDispatch } from 'react-redux';
import Popup from '../Postbox/Popup'
import Feeling from '../Postbox/Feeling'
import Photo from '../Postbox/Photo'



function MessageSender() {
    const [inputs, setInputs] = useState('')
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const postDatas = {
            message: inputs.message,
            commentavatar: `rand${Math.floor(Math.random() * 3)}.jpg`,
            commentname: 'Anonyfamous',
            commentimage: inputs.commentimage,
            reelimage: `reel${Math.floor(Math.random() * 3)}.jpg`,
            tag: `man${Math.floor(Math.random() * 3)}`,
            createdAt: now(),
        }

        dispatch(createPost(postDatas));
        dispatch(getPost(postDatas));
        setInputs("")
    }

    return (
        <div className="messageSender_top">

            <div className="messageSender_row1">
                <Avatar src={require(`../images/rand${Math.floor(Math.random() * 3)}.jpg`)} alt='Commenter' />
                <Popup />
            </div>
            <div className="messageSender_row2">

                <div className="messageSender_option1">
                    <a href="https://www.facebook.com/live/producer/v2/?entry_point=feedx_sprouts&target_id=711460000" style={{ textDecoration: 'none' }}>
                        <VideocamIcon style={{ color: "red" }} />
                        <h3 style={{ color: 'gray', fontSize: 'Large' }}>&nbsp;Live Video</h3>
                    </a>
                </div>
                <div className="messageSender_option">
                    <Photo />
                </div>
                <div className="messageSender_option">
                    <Feeling />
                </div>
            </div>

        </div>
    )
}



export default MessageSender