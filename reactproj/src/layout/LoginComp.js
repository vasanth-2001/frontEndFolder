import React, { useRef } from 'react'
import './loginComp.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const LoginComp = () => {

    const nav = useNavigate();
    const uidRef = useRef();
    const upassRef = useRef();
  const checkUser =()=>{
    let uid = uidRef.current.value;
    let upass = upassRef.current.value;
    
    axios.get("http://localhost:8080/user").then((res)=>{
      // console.log(res.data);
      // sessionStorage.setItem("userid","userpass");
      let currentUser = res.data.filter((val,index)=>{return val.userid===uid && val.userpass===upass})
      if(currentUser.length > 0){
        window.alert("login Success");
        sessionStorage.setItem("user",uid);
        nav("/mainDashboard");
      }
      else{
        window.alert("wrong credentials");
        uidRef.current.value="";
        upassRef.current.value="";

      }
    }).catch((error)=>{})
  }
  return (
    <div className='loginContainer'>
      {/* This is login Component */}
      <form className='loginForm'>
        <label>Enter user id :</label>
        <input type='text' name='uid' ref={uidRef} className='form-control mb-2 mt-2'></input>
        <label>Enter user password : :</label>
        <input type='text' name='upass' ref={upassRef} className='form-control mb-2 mt-2'></input>
        <button type='button' onClick={()=>checkUser()} className='btn btn-primary'>Login</button>
      </form>
    </div>
  )
}

export default LoginComp