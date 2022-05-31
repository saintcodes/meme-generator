import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function MemeCards({gif}) {
const {title, id} = gif

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={gif.images.original.url}/>
        <Card.Body>
          <Card.Title className='titletext'>{title}</Card.Title>
          <Button variant="primary">Add to Favorites</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default MemeCards