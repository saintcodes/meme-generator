import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'

function Home() {
  const [meme, setMeme] = useState({"image":"https://api.memegen.link/images/buzz/memes/memes_everywhere.gif?token=icc12mvkq7hc9ysbbtxr&width=800&frames=50"})
  const [memeArray, setMemeArray] = useState([])

  useEffect (() => {fetch('http://localhost:3004/memes')
    .then(res => res.json())
    .then(memes => setMemeArray(memes))
},[])

  let randomMeme = memeArray[Math.floor(Math.random()*memeArray.length)]

  function handleChange() {
    setMeme(randomMeme)
  }

  return (
    <div>
      <br></br>
      <div className="d-grid gap-2">
        <Button className="btn-inline" variant="danger" size="lg" onClick={handleChange}>Random Meme</Button>
      </div>
      <br></br>
      <img src={meme.image} alt=""/>
      <br></br>
      <br></br>
    </div>
  )
}

export default Home