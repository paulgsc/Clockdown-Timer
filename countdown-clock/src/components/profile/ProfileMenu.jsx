import React from 'react';
import { quickActionMenu } from '../../constants/navbar/profileMenu';
import { Link } from 'react-router-dom';
import { Icons } from '../../constants/icons/icons';
import { CiLogout } from 'react-icons/ci';
import ReactIcons from '../ui/ReactIcons';
import { useStateValue } from '../../contexts/StateProvider';
import { auth } from '../../firebase';

function ProfileMenu() {
    
    const [{ user }, dispatch] = useStateValue();
    const handleAuthentication = (e) => {
        console.log(e.target)
        const isLogoutRequest = (e.target.id === "signOut")
        if (user && isLogoutRequest) {
            auth?.signOut();
            !!localStorage.getItem('initial') && localStorage.removeItem("initial");
        }
    }
    
  return (
    <div className="profile-menu-container">
        <div className="profile-menu-card profile-user-info">
                <ul className='profile-menu-card profile-icon-container'>
                    <li key={'user_name'}>
                        <div className="profile-icon-details">
                            <span>{`some user name`}</span>
                            <div className="profile-icon-container"></div>
                        </div>
                    </li>
                </ul>
            <div className="profile-user-creds"></div>
        </div>
        <div className="profile-menu-card profile-quick-actions">
            <ul className='profile-menu-card '>
                {
                    quickActionMenu.map((item) => (
                    <Link to={item.path} onClick={handleAuthentication} >
                        <li key={item.id} id={item.containerId} >
                            <div className="menu-with-icon" id={item.containerId}>
                            <div id={item.containerId}  className="menu-icon"> { !!item.icon && <ReactIcons Icon={item.icon} id={item.containerId} /> } </div>
                                <div id={item.containerId} className="quick-action-menu">
                                    <span id={item.containerId} className='quick-action-menu'>{item.title}</span>
                                </div>
                            </div>
                        </li>
                    </Link>
                    ))
                }
            </ul>
        </div>
        <div className="profile-upsell">
            <ul className='profile-upsell'>
                <li>
                    <div className="upsell-menu">
                        <span className='upsell-menu'></span>
                    </div>
                    <div className="upsell-menu-icon"></div>
                </li>
            </ul>
        </div>
        <div className="profile-customizations">
            <ul className='profile-customizations'>
                <li>
                    <div className="customization-menu">
                        <span className='customization-menu'></span>
                    </div>
                    <div className="customization-menu-icon"></div>
                </li>
            </ul>
        </div>
        <div className="profile-help-section">
            <ul className='profile-help-section'>
                <li>
                    <div className="help-section-menu">
                        <span className='help-section-menu'></span>
                    </div>
                    <div className="help-section-menu-icon"></div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default ProfileMenu
