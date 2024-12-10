import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';

const NavComp = () => {
  const nav =useNavigate();
  const logoutUser =()=>{
    window.alert("logout successfully");
    sessionStorage.clear();
    nav("/")

  }
  return (<div>
    {/* <div>NavComp</div> */}
    <Link to="event" className='btn btn-primary btn-sm'>event</Link>{" "}
    <Link to="mycss" className='btn btn-primary btn-sm'>Css</Link>{" "}
    <Link to="hooks" className='btn btn-primary btn-sm'>Hooks</Link>{" "}
    <Link to="favcolor" className='btn btn-primary btn-sm'>myfavcolor</Link>{" "}
    <Link to="formval" className='btn btn-primary btn-sm'>FormVal</Link>{" "}
    <Link to="productdash" className='btn btn-primary btn-sm'>ProductDash</Link>{" "}
    {/* <Link to="productadd" className='btn btn-primary btn-sm'>ProductAdd</Link>{" "} */}
    {/* <Link to="productedit" className='btn btn-warning btn-sm'>ProductEdit</Link> */}
    <Link to="carousal" className='btn btn-primary btn-sm' >My Carousal</Link>{" "}
    <Link to="datalist" className='btn btn-primary btn-sm' >DataList</Link>
    <Link    onClick={()=>logoutUser()} className='btn btn-danger btn-sm' style={{float:"right"}} >
    <LogoutIcon/>
    </Link>
    </div>
  )
}

export default NavComp