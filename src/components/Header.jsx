import React from 'react'
import {Button} from 'react-bootstrap'

export const Header = (navbarOpen, setNavbarOpen)=>{
    return (
      <div className='d-flex header justify-content-between align-items-center'>
        
        <div className='logo'>Photography Today</div>
        <div className='login-btn'>
          <Button variable = 'primary'>Login </Button>
        </div>
        <div className='logout-btn'>
          <Button variable = 'primary'>Logout </Button>
        </div>
      </div>
    )
}