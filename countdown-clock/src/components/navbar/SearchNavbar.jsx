import React, { useEffect, useState } from 'react'
import NavbarLogo from './navlogo/NavbarLogo'
import NavbarLogins from './navlogins/NavbarLogins'
import SearchBar from '../searchbar/SearchBar'
import { useStateValue } from '../../contexts/StateProvider';
import Profile from '../profile/Profile';

function SearchNavbar() {

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
      <SearchBar />
      <div className="navbar-right-items">{ !!profileInitial ? <Profile user={profileInitial}/> : <NavbarLogins /> }</div>
    </div>
  )
}

export default SearchNavbar
