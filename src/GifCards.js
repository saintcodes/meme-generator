import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function GifCards({gif}) {
const {title} = gif

  return (
    <div>
      <Card className="card text-white bg-dark mb-4" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={gif.images.original.url}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Button variant="dark">♡</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default GifCards