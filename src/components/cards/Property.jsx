import React from 'react';

function Property({ thumbnail, title, channel, views, date }) {
  return (
    <div className="card-property">
      <div className="thumbnail">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="details">
        <h2>{title}</h2>
        <p className="channel">{channel}</p>
        <div className="meta">
          <p>{views} views</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  )
}

export default Property
