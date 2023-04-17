import React from 'react';
import '../../styles/components/cards.css';
import { Card } from './Card';


function Property({ thumbnail, title, street, type, finance, unit_price, status }) {
  return (
    <Card className="card-property">
      <Card.Content className={"card-thumbnail"}>
        <img src={thumbnail} alt={title} />
      </Card.Content>
      <Card.Title>
        {street}
      </Card.Title>
      <Card.Description>
        {title}
      </Card.Description>
      <Card.Footer>
          <p>{type}</p>
          <p>{finance}</p>
          <p>{unit_price}</p>
          <p>{status}</p>
      </Card.Footer>
    </Card>
  )
}

export default Property
