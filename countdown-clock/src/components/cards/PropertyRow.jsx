import React from 'react';
import Property from './Property';
import '../../styles/components/cardrow.css';

function PropertyRow({ payload, maxCol }) {

  const numRows = Math.ceil(payload.length / maxCol);
  return (
    <div className='property-row-container'>
    {
      [...Array(numRows)].map((_, rowIndex) => (
        <div className="property-row" key={rowIndex}>
            {payload.slice(rowIndex * maxCol, rowIndex * maxCol + maxCol)
            .map((item, index)=> (
                <Property
                  key={`${rowIndex}-${index}`}
                    thumbnail={item.thumbnail}
                    street={item.street}
                    title={item.title}
                    finance={item.finance}
                    status={item.status}
                    type={item.type}
                    unit_price={item.unit_price}
                    date={item.date}
                />
            ))}
        </div>
      ))
    }
  </div>
    
  )
}

export default PropertyRow
