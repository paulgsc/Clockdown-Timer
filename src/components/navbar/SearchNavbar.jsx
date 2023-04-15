import React from 'react'
import NavbarLogo from './navlogo/NavbarLogo'
import NavbarLogins from './navlogins/NavbarLogins'
import SearchBar from '../searchbar/SearchBar'
import { useStateValue } from '../../contexts/StateProvider';
import Profile from '../profile/Profile';

function SearchNavbar() {
 
  const [{ user }, dispatch]  = useStateValue();
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
      <SearchBar />
      <div className="navbar-right-items">{ !!user ? <Profile user={profileInitial}/> : <NavbarLogins /> }</div>
    </div>
  )
}

export default SearchNavbar
