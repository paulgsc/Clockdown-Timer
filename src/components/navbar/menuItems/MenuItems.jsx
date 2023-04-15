import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function MenuItems({ dropdown }) {
  
  return (
    <div className={"dropdown-menu"}>
          {dropdown.map((item) => (
            <ul key={item.id}>
              <li>
                <Link to={item.path}><span>{item.title}</span></Link>
              </li>
            </ul>
          ))}
          </div>
  )
}

export default MenuItems
