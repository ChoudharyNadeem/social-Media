import React from 'react'
import './Posts.css'
import { PostsData } from '../data/PostsData'
import Post from '../post/Post'
import { DeletePost, fetchAllPosts } from '../Api/Api'
import { useEffect } from 'react'

const Posts = () => {
  const [posts,setPosts]=React.useState([])
  const [delId,setDelId]=React.useState(null)


  const getAllPosts=async()=>{
    const res=await fetchAllPosts();
    console.log('res',res.data.data)
    if(res){
      setPosts(res.data.data)

    }

  }
  const handleDelete=async(id)=>{
  
    const res = await DeletePost(id);
    setDelId(id)
  
  }

  useEffect(()=>{
    getAllPosts()

  },[delId])

  return (
    <div className='Posts shadow'>

     
        {
            posts?.map((post,id)=>{
                return <Post post={post} id={id} handleDelete={handleDelete} />

                

                
            })
        }
     
    </div>
  )
}

export default Posts

