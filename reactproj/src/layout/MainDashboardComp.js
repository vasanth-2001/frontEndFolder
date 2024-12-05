import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import NavComp from './NavComp'
import Footer from './Footer'

const MainDashboardComp = () => {
  return (<div className='container'>
    {/* <div>MainDashboardComp</div> */}
    <div className='card border-primary'>
      <div className='card-header border-primary'>
        <NavComp/>
      </div>
      <div className='card-body border-primary'>
        <Outlet/>
      </div>
      <div className='card-footer border-primary'>
        <Footer/>
      </div>
    </div>
    </div>
  )
}

export default MainDashboardComp