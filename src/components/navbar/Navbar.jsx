import React, { useEffect, useState } from 'react';
import NavbarLogins from './navlogins/NavbarLogins';
import NavbarLogo from './navlogo/NavbarLogo';
import NavbarItems from './menubar/NavbarItems';
import '../../styles/components/navbar.css';
import { useStateValue } from '../../contexts/StateProvider';
import Profile from '../profile/Profile';

function Navbar() {

  const [{ user }, dispatch] = useStateValue()
  const [profileInitial, setProfileInitial] = useState('');

  useEffect(() => {
    try {
      user.displayName ? setProfileInitial(user?.displayName[0]) : setProfileInitial(user?.email[0])
    } catch (error) {
      console.log('well what is going on!')
    }
  }, [])

  return (
    <div className='nav-container'>
        <NavbarLogo />
        <NavbarItems />
        <div className="navbar-right-items">
          { !!user ? <Profile user={profileInitial}/> : <NavbarLogins /> }
        </div>
    </div>
  )
}

export default Navbar
