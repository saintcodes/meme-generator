import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function MemeCards({meme}) {
  const {name, url} = meme

  return (
    <div>
      <Card style={{ width: '18rem' }}>
          <Card.Title className='titletext'>{name}</Card.Title>
        <Card.Img src={url} variant="top"/>
        <Card.Body>
          <Button variant="primary">Create</Button>
        </Card.Body>
      </Card>
  </div>
  )
}

export default MemeCards