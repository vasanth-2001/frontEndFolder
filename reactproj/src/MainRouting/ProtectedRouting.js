import React, { useEffect } from 'react'
import { Component } from 'react';
import { useNavigate } from 'react-router-dom'
const ProtectedRouting = ({Component}) => {
    const nav=useNavigate();
    // useEffect(()=>{
    //     if(!sessionStorage.getItem("jwtToken")){  //  if(!sessionStorage.getItem("user")){ 
    //     // if(!sessionStorage.getItem("accessToken")){  //  if(!sessionStorage.getItem("user")){ 
    //       nav("/");
    //     }
    // })
    useEffect(()=>{
      const tokenExist = !!sessionStorage.getItem("jwtToken");
      if(!tokenExist){
          nav("/");
      }
  },[])
  return (
    <div>
        {/* ProtectedRouting */}
        <Component></Component>
        </div>
  )
}

export default ProtectedRouting