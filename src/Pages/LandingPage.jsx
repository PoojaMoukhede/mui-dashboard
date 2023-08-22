import React from 'react'
import landingImage from '../Image/World tour.png'
import {Link} from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className='landingpage'>
         <div className='rightL'>
          <h1 className='title'>Keep Track Of Your <br/>Employee</h1>
          <p className='pdesc'>Employee scheduling for payroll, productivity and billing.<br/>
           Get hours of payroll by employees clock in and out, <br/>
           All in one platform.
          </p>
         <Link to='/login'> <button className='button'>Get Started</button></Link> 
         </div>
         <div className='leftL'>
            <img alt='' src={landingImage} className='map'/>
         </div>
    </div>
  )
}
