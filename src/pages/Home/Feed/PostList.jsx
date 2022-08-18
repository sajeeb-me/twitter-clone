import React from 'react'
import Post from '../Post/Post.js'
const PostList = ({postList}) => {
    return (
        <>
            {
                postList.map((post) => (
                    <Post post={post} key={post._id}/>
                ))
            }
        </>
    )
}

export default PostList