import React from 'react'
import brand from '../assets/brand.png'
import { Link } from 'react-router-dom'

function SignUp() {
  
    return (
        <div id='SignUpBody'>
            <div>
            <Link to="/" className="SignUpLogo">
          <img src={brand} alt="logo" />
        </Link>
        Sign
            </div>
        </div>
    )
}

export default SignUp
