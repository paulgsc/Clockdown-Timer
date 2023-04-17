import React from 'react';
import SearchNavbar from '../components/navbar/SearchNavbar';
import Property from '../components/cards/Property';
import PropertyRow from '../components/cards/PropertyRow';
import { db_properties } from '../constants/db/property';
import '../styles/pages/listings.css';

function Listings() {

  return (
    <div className='listings-container'>
      <SearchNavbar />
      <div className="listings-property-container">
        <PropertyRow 
          payload={db_properties}
          maxCol={4}
        />
      </div>
    </div>
  )
}

export default Listings
