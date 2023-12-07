import React from 'react'
import {Button} from 'react-bootstrap'

export const Header = (navbarOpen, setNavbarOpen)=>{
    return (
      <div className='d-flex header justify-content-between align-items-center'>
        
        <div className='logo'>Добре дошли</div>
        <div >
          <Button className='login-btn'variable = 'primary'>Login </Button>{' '}
          <Button className='register-btn'variable = 'primary'>Register </Button>{' '}
          <Button  className ='logout-btn' variable = 'secondary'>Logout </Button>{' '}
        </div>
        
          
        </div>
      
    )
}