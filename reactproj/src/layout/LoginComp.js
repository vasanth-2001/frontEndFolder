import React, { useRef } from 'react'
import './loginComp.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { POST } from '../shared/service/HTTP.Service'
const LoginComp = () => {

    const nav = useNavigate();
    const uidRef = useRef();
    const upassRef = useRef();
  const checkUser =()=>{
    let uid = uidRef.current.value;
    let upass = upassRef.current.value;
    let empObj ={
      userid:uid,
      userpass:upass
    }

    const payload = {
      "username": uid,
      "password": upass
    }
    // axios.post("http://127.0.0.1:8000/api/token/",payload)
    // POST("http://127.0.0.1:8000/api/token/",payload)
    POST("/api/token/",payload)
      .then(res => {
        console.log("token res: ",res);
        // sessionStorage.setItem("jwtToken",res.data.access);
        sessionStorage.setItem("accessToken",res.access);
        nav("/maindashboard");
      })
      .catch(err => console.log("token err: ",err));

    


    
    // axios.get("http://localhost:8080/user").then((res)=>{
    //   // console.log(res.data);
    //   // sessionStorage.setItem("userid","userpass");
    //   let currentUser = res.data.filter((val,index)=>{return val.username===uid && val.password===upass})
    //   if(currentUser.length > 0){
    //     window.alert("login Success");
    //     sessionStorage.setItem("user",uid);
    //     nav("/mainDashboard");
    //   }
    //   else{
    //     window.alert("wrong credentials");
    //     uidRef.current.value="";
    //     upassRef.current.value="";

    //   }
    // }).catch((error)=>{})


      // code for AWT token
      
      // POST("http://localhost:8080/api",empObj).then((response)=>{
      //   if (response.access) {
      //     handleSnackbarOpen("Login Successfully","success");
      //     sessionStorage.setItem("access Token",response?.access);
      //     nav()
      //   }
      // }).catch((error)=>{})
      // POST("http://localhost:8080/api",empObj).then((response)=>{
      //   if (response.access) {
      //     // handleSnackbarOpen("Login Successfully","success");
      //     sessionStorage.setItem("access Token",response?.access);
      //     nav()
      //   }
      // }).catch((error)=>{})
  }
  return (
    <div className='loginContainer'>
      {/* This is login Component */}
      <form className='loginForm' >
        <label>Enter user id :</label>
        <input type='text' name='uid' ref={uidRef} className='form-control mb-2 mt-2'></input>
        <label>Enter user password : :</label>
        <input type='password' name='upass' ref={upassRef} className='form-control mb-2 mt-2'></input>
        <button type='button' onClick={()=>checkUser()} className='btn btn-primary'>Login</button>
      </form>
    </div>
  )
}

export default LoginComp