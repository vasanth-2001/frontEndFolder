import React from 'react'
import { Link } from 'react-router-dom'

const NavComp = () => {
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
    </div>
  )
}

export default NavComp