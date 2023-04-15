import React from 'react';
import NavbarLogins from './navlogins/NavbarLogins';
import NavbarLogo from './navlogo/NavbarLogo';
import NavbarItems from './menubar/NavbarItems';
import '../../styles/components/navbar.css';

function Navbar() {
  return (
    <div className='nav-container'>
        <NavbarLogo />
        <NavbarItems />
        <div className="navbar-right-items">
          <NavbarLogins />
        </div>
    </div>
  )
}

export default Navbar
