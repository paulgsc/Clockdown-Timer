import React from 'react';
import { Link } from 'react-router-dom';

function NavbarLogins() {
  return (
    <div className='header__nav__links-logins'>
        <Link to={'/login'} className='links-logins button-signin'><span className='logins_sign_in'>Sign In</span></Link>
        <Link to={'/signup'} className='links-logins button-signup'><span className='logins_sign_up'>Sign Up</span></Link>
    </div>
  )
}

export default NavbarLogins
