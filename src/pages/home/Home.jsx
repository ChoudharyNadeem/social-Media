import React from 'react'
import PostSide from '../../component/PostSide/PostSide'
import ProfileSide from '../../component/profile/ProfileSide'
import RightSide from '../../component/RightSide/RightSide'

const Home = () => {
  return (
    <div className='Home'>
       <ProfileSide/>
      <PostSide/>
      <RightSide/>
      
    </div>
  )
}

export default Home
