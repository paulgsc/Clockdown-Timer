import React, { useEffect, useState } from 'react';
import NavbarLogins from './navlogins/NavbarLogins';
import NavbarLogo from './navlogo/NavbarLogo';
import NavbarItems from './menubar/NavbarItems';
import '../../styles/components/navbar.css';
import { useStateValue } from '../../contexts/StateProvider';
import Profile from '../profile/Profile';

function Navbar() {

  const initLetter = () => JSON.parse(localStorage.getItem('initial'))?.charAt(0) || '';
  const [{ user }, dispatch]  = useStateValue();
  const [profileInitial, setProfileInitial] = useState(initLetter());

  useEffect(() => {
    if (typeof initLetter === 'function') {
      setProfileInitial(initLetter());
    }
  }, [user]);

  return (
    <div className='nav-container'>
        <NavbarLogo />
        <NavbarItems />
        <div className="navbar-right-items">{ !!profileInitial ? <Profile user={profileInitial}/> : <NavbarLogins /> }</div>
    </div>
  )
}

export default Navbar
