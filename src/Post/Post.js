import React from 'react'
import { useSelector } from 'react-redux'
import '../Post/Post.css'
import APost from './aPost/APost'


function Post(post) {

    const aposts = useSelector((state) => state.mreducers)



    return (

        aposts.filter((names) => names.commentimage !== "").map((apost, i) =>
            <APost key={i} posts={apost} />
        )
    )
}
export default Post