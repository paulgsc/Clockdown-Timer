import React from 'react'
import SearchNavbar from '../components/navbar/SearchNavbar'
import Property from '../components/cards/Property'

function Listings() {
  return (
    <div>
      <SearchNavbar />
      <Property
        thumbnail="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
        title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
        channel="RickAstleyVEVO"
        views="1.3B"
        date="12 years ago"
      />
      <Property
        thumbnail="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
        title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
        channel="RickAstleyVEVO"
        views="1.3B"
        date="12 years ago"
      />
      <Property
        thumbnail="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
        title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
        channel="RickAstleyVEVO"
        views="1.3B"
        date="12 years ago"
      />
    </div>
  )
}

export default Listings
