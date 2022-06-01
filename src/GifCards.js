import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function GifCards({gif}) {
  const [likes, setLikes] = useState (gif.likes)

  const {image} = gif

  function handleClick(e) {
    setLikes(likes => likes+1)
  }

  return (
    <div>
      <Card className="card bg-light mb-4" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image}/>
        <Card.Body>
          <Button variant="danger" onClick={handleClick}>♡ {likes}</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default GifCards