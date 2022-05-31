import React, {useState} from 'react'

function Home() {
  const [meme, setMeme] = useState("https://api.memegen.link/images/buzz/memes/memes_everywhere.gif?token=icc12mvkq7hc9ysbbtxr&width=800&frames=50")
  
  let memeArray = [] 

  fetch('http://localhost:3004/memes')
    .then(res => res.json())
    .then(memes => memes.map((meme) => memeArray.push(meme.image))
  )
  
  // console.log(memeArray)
  let randomMeme = memeArray[Math.floor(Math.random()*memeArray.length)]

  // console.log(randomMeme)
    
  function handleChange() {
    // console.log(randomMeme)
    setMeme(randomMeme)
  }

  return (
    <div>
      <button onClick={handleChange}>Random Meme</button>
      <br></br>
      <br></br>
      <img src={meme} alt=""/>
    </div>
  )
}

export default Home