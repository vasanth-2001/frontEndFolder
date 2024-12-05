import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const UseStateHooksComp = () => {
   const [count,setCount] =useState(0);
   const [name,setName] =useState("vasanth");
   const incrementCount =()=>{
    setCount(count+1);
   }
  return (<div>
    <div>UseStateHooksComp</div>
    <p> counter value: <strong>{count}</strong></p>
    <p> Name: <strong>{name}</strong></p>
    <button type='button' onClick={()=>incrementCount()} className='btn btn-primary'>change count</button>{" "}
    <button type='button' onClick={()=>setCount(count+2)} className='btn btn-primary'>change count</button>{" "}
    <button type='button' onClick={()=>setName("Vasanth Rajendran")} className='btn btn-primary'>change Name</button>
    
    </div>
  )
}

export default UseStateHooksComp