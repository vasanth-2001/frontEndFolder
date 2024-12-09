import React, { useEffect } from 'react'
import { Component } from 'react';
import { useNavigate } from 'react-router-dom'
const ProtectedRouting = ({Component}) => {
    const nav=useNavigate();
    useEffect(()=>{
        if(!sessionStorage.getItem("user")){
          nav("/");
        }
    })
  return (
    <div>
        {/* ProtectedRouting */}
        <Component></Component>
        </div>
  )
}

export default ProtectedRouting