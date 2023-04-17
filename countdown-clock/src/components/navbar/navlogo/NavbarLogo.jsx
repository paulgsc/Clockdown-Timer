import React from 'react';
import { Link } from 'react-router-dom';

function NavbarLogo() {
  return (
    <>
       <Link to='/'>
        
          <span className='header__nav__links-logo'>Logo</span>
      </Link>
    </>
   
  )
}

export default NavbarLogo
