import React from 'react'

import LogoSearch from '../LogoSearch/LogoSearch'
import FollowersCard from '../FollowersCard/FollowersCard'
import InfoCard from '../infoCard/InfoCard'
const ProfileLeft = () => {
  return (
   <div className="ProfileSide">
     <LogoSearch/>
     <InfoCard/>
     <FollowersCard/>
   </div>
  )
}

export default ProfileLeft
