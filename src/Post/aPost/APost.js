import React, { useState } from 'react'
import { Avatar } from '@material-ui/core'
import '../aPost/aPost.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUpOutlined'
import Commented from '@material-ui/icons/ChatBubbleOutline'
import Sharing from '@material-ui/icons/ReplyOutlined'
import moment, { now } from 'moment'
import { useDispatch, useSelector } from 'react-redux';
import { likeCount, createPost } from '../../actions/actionpost';
import Comments from '../../Comment/Comment'

function Post(posts) {

    const dispatch = useDispatch();
    const amembers = useSelector((state) => state.mreducers);
    const [input, setInput] = useState('')
    const [newMembers, setNewMembers] = useState(amembers)


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('e ', e)
        let tags;
        (posts.posts.commentimage === null) ? (tags = `tag${Math.floor(Math.random() * 100)}`) : (tags = posts.posts.tag)

        const postData = {

            message: '',
            commentavatar: `rand${Math.floor(Math.random() * 3)}.jpg`,
            commentimage: '',
            commentname: posts.posts.commentname,
            commentmessage: input.message,
            reelimage: posts.posts.reelimage,
            tag: tags,
            createdAt: now(),
        }

        dispatch(createPost(postData));
        let arr = newMembers.concat(postData)
        setNewMembers(arr);
        setInput(input.message = '')

    }


    return (
        <div className="post_top">
            <div className="post_row1">
                <Avatar src={posts?.posts?.commentavatar} className="post_row1_avatar" />
                <div className="post_row1_sub">
                    <h3>{posts?.posts?.commentname}</h3>
                    <p>{moment(posts?.posts?.createdAt).fromNow()}</p>
                </div>
            </div>
            <div className="post_row2">
                <p>{posts?.posts?.message}</p>
            </div>
            <div className="post_row3">
                <img src={posts?.posts?.commentimage} alt='' />
            </div>

            <div className="post_row3a">
                <p style={{ color: 'gray', margin: '15px' }}><img src={require(`../../images/likeheart.gif`)} alt="emojies" />&nbsp;{posts?.posts?.likecount.toLocaleString('en')}</p>
            </div>


            <div className="post_row4">
                <div className="post_sub_4">

                    <ThumbUpIcon onClick={() => dispatch(likeCount(posts?.posts?._id))} /><p onClick={() => dispatch(likeCount(posts?.posts?._id))} >Like </p>
                </div>
                <div className="post_sub_4">

                    <Commented onClick={() => dispatch((posts?.posts?._id))} /><p>Comment</p>

                </div>
                <div className="post_sub_4">

                    <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"><Sharing /></a><p>Share</p>

                </div>
            </div>

            <div className="post_row5">
                <Avatar src={require(`../../images/rand${Math.floor(Math.random() * 3)}.jpg`)} alt='Commenter' value={`rand${Math.floor(Math.random() * 3)}.jpg`} />&nbsp;&nbsp;

                <form onSubmit={handleSubmit}>
                    <input
                        name="message"
                        onChange={(e) => setInput({ message: e.target.value })}
                        className="post_row5_input" placeholder="Write a Comment"
                        required />
                    <input type="hidden" value={require(`../../images/rand${Math.floor(Math.random() * 3)}.jpg`)} name="commentavatar" onSubmit={(e) => setInput({ commentavatar: e.target.value })} />
                    <button type="submit">Hidden Submit</button>


                </form>
            </div>


            {(newMembers).filter((names) => names.tag === posts?.posts?.tag && posts?.posts?.tag !== undefined).map((postings) =>
                <div className="post_row6">
                    <Comments commentsub={postings} />
                </div>
            )}


        </div>

    )
}

export default Post