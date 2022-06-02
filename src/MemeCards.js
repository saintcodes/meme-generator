import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function MemeCards({meme, selectImage}) {
  const {name, id, url} = meme

  return (
    <div>
      <Card style={{ width: '18rem' }}>
          <Card.Title key={id} className='titletext'>{name}</Card.Title>
        <Card.Img src={url} variant="top"/>
        <Card.Body>
          <Button 
            key={id} 
            value={url} 
            onClick={selectImage} 
            variant="primary"
          >Create</Button>
        </Card.Body>
      </Card>
  </div>
  )
}

export default MemeCards


