import React from "react";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
// import {RiChatDeleteFill} from '@react-icons/all-files/ri'

import "./Post.css";


const Post = ({ post ,handleDelete}) => {


  return (
    <div className="Post">
      <img src={post?.image?.url} alt="" />
      <div className="postReact">
        <img src={post?.liked ? Heart : NotLike} alt="" />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
        <div className="ml" >
     
        <button className="button infoButton" onClick={()=>handleDelete(post?._id)} >Delete</button>
        </div>
      </div>
      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {post?.likes} likes 3400
      </span>
      <div className="Details">
        <span>
          <b>Author Name</b>
        </span>
        <span>{post?.title}</span>
      </div>
    </div>
  );
};

export default Post;
