import { faCalculator, faCopyright, faTruck, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { toast } from 'react-toastify'

function Portal() {

  const logout = ()=>{
    toast.success("User logged out successfully",{toastId:Math.random()})
  }
  return (
    <div >
        <div className="logo ps-3">
            <h2 className='mb-0 pb-0'>BOXIGO</h2>
            <p className='mt-0 pt-0 ps-1 slogan'>Move Made Simple</p>
            
        </div>
    <div className="d-flex ms-4 me-4">
        <div className="col-2">
          <div className='pb-4'><NavLink to="/" className={({isActive}) => isActive ? `nav-border nav-link pt-2 pb-2` : `nav-pad nav-link pt-2 pb-2`}> <FontAwesomeIcon icon={faTruck} size='xl' className='ps-1'/> MY MOVES</NavLink></div>
          <div className='pb-4'><NavLink to="/profile" className={({isActive}) => isActive ? `nav-border nav-link pt-2 pb-2` : `nav-pad nav-link pt-2 pb-2`}> <FontAwesomeIcon icon={faUser} size='xl' className='ps-1'/> MY PROFILE</NavLink></div>
          <div className='pb-4'><NavLink to="/quotes" className={({isActive}) => isActive ? `nav-border nav-link pt-2 pb-2` : ` nav-pad nav-link pt-2 pb-2`}> <FontAwesomeIcon icon={faCalculator} size='xl' className='ps-1'/> GET QUOTE</NavLink></div>
          <div className='pb-4 nav-pad logout' onClick={logout}> <FontAwesomeIcon icon={faCopyright} size='xl' className='ps-1'/> LOGOUT</div>
        </div>
        <div className="col-10">
          <Outlet/>
        </div>
    </div>
</div>
  )
}

export default Portal