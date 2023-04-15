import React, { useState } from 'react';
import { json, Link } from 'react-router-dom';
import MenuItems from '../menuItems/MenuItems';
import { menubar } from '../../../constants/navbar/menubar';
import { v4 as uuidv4 } from 'uuid';

function NavbarItems() {
  
  return (
    
    <div className="navbar-menu">
      {menubar.map((menu) => (
       
        <ul key={menu.id}>
          <li key={menu.id} >
            <Link to={menu.path}><span>{menu.title}</span></Link>
              {menu?.dropdown && <i className="fa fa-caret-down" aria-hidden="true" />}
            {menu?.dropdown && <MenuItems dropdown={menu.dropdown} />} 
          </li>
        </ul>
      ))}
      </div>
  )
}

export default NavbarItems
