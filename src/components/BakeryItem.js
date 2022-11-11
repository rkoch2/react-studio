import React from 'react'
import { Card, Button } from 'react-bootstrap'

/**
 * 
 * @param {name} string 
 * @param {description} string
 * @param {price} number
 * @param {image} string
 * @returns 
 */
export default function BakeryItem({item, addToCart}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Card.Text>
          ${item.price}
        </Card.Text>
        <Button variant="info" onClick={() => addToCart(item) }>Add to Cart</Button>
      </Card.Body>
    </Card>
  )
}

