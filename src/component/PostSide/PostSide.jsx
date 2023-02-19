import React from 'react'
import Post from '../Posts/Posts'
import PostShare from '../Postshare/PostShare'
import './PostSide.css'

const PostSide = () => {
  return (
    <div className="Postside">
        <PostShare/>
        <Post/>

    </div>
  )
}

export default PostSide
