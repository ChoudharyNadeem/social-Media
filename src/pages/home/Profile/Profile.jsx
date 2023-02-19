import React from 'react'

import ProfileLeft from '../../../component/profileLeft/ProfileLeft'
import ProfileCard from '../../../profilecard/ProfileCard'
import PostSide from '../../../component/PostSide/PostSide'
import RightSide from '../../../component/RightSide/RightSide'
import './Profile.css'

const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft/>
      <div className="profile-center">
        <ProfileCard/>
        <PostSide/>
      </div>
      <RightSide/>
    </div>
  )
}

export default Profile
