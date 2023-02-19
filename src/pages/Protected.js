import React, { useEffect } from "react";
import {  useNavigate } from "react-router-dom";



const Protected = (props)=>{
    const {Component,user } = props
    console.log(props)
    
   const Navigate = useNavigate();
    useEffect(()=>{
        const token = window.localStorage.getItem("token")
        if(!token){
            Navigate("/")
        }
    },[])

    return(
        <>
        
      <Component/>
     
        </>
    )
}
export default Protected;