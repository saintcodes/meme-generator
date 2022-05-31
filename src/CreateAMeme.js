import React, {useEffect, useState} from 'react'
import MemeCards from './MemeCards';

function CreateAMeme() {
  const [memes, setMemes] = useState([])
  const [formData, setFormData] = useState ({
    "name": "",
    "url": "",
    "author": "",
    "topText": "",
    "bottomText": "",
  })

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(memes => console.log(memes))
      .catch(err => console.log(err))
  }, [])

  function handleChange(e) {
    const {name, value} = e.target
    setFormData({...formData, 
      [name]: value})
      console.log(formData)
  }

  function handleSubmit() {
    console.log('hello')
  }

  return (
    <div className="cards">
        {memes.map((meme) => console.log(meme))}
      <form className = 'new-meme-form'>
        <h2>Create a Meme!</h2>
          <input type="text" name="url" placeholder="Image url" value={formData.url} onChange={handleChange}/>
          <br></br>
          <input type="text" name="author" placeholder="Author" value={formData.author} onChange={handleChange}/>
          <br></br>
          <input type="text" name="topText" placeholder="Top Text" value={formData.topText} onChange={handleChange}/>
          <br></br>
          <input type="text" name="bottomText" placeholder="Bottom Text" value={formData.bottomText} onChange={handleChange}/>
          <br></br>
          <button type="submit" onSubmit={handleSubmit}>Add Meme</button>
      </form>
    </div>
  )
}

export default CreateAMeme