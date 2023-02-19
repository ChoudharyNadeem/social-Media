import React from 'react'
import './InfoCard.css'
import  {UilPen} from '@iconscout/react-unicons'
import { useState } from 'react'
import ProfileModel from '../ProfileModel/ProfileModel'

const InfoCard = () => {

    const [modelOpen,setModelOpen]=useState(false)


  return (
    <div className="infoCard">
        <div className="infoHead">
           <h4>Your Info</h4> 
           <div>

           <UilPen width='2rem' height='1.2rem' onClick={()=>setModelOpen(true)}/>
          <ProfileModel modelOpen={modelOpen} setModelOpen={setModelOpen}/>
           </div>
        </div>
        <div className="info">
            <span><b>Status</b></span>
            <span> in Relationship</span>
        </div>
        <div className="info">
            <span>
                <b>Lives</b>
            </span>
            <span> Saharanpur</span>
        </div>
        <div className="info">
            <span>
                <b>Work At</b>
            </span>
            <span> Google</span>
        </div>
        <button className='button logout-button'>Logout</button>
    </div>
  )
}

export default InfoCard
