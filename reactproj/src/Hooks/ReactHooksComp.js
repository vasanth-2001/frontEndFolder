import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ReactHooksComp = () => {
  return (<div>
    <div>ReactHooksComp</div>
    <div className='card border-primary'>
      <div className='card-header border-primary'>
      <Link to="usestate" className='btn btn-warning btn-sm'>use state</Link>{" "}
      <Link to="useeffect" className='btn btn-warning btn-sm'>use effect</Link>{" "}
      </div>
      <div className='card-body border-primary'>
        <Outlet/>
      </div>
      {/* <div className='card-footer border-primary'> */}

      {/* </div> */}
    </div>
    </div>
  )
}

export default ReactHooksComp