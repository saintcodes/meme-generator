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
    .then(memes => setMemes(memes.data.memes))
  }, [])
  
  
  function handleChange(e) {
    const {name, value} = e.target
    setFormData({...formData, 
      [name]: value})
      console.log(formData)
  }
  function handleSubmit(e) {
    e.preventDefault()
    console.log('hello')
  }

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com',
		'X-RapidAPI-Key': 'aedaa1bab3msh1657a6263557744p19b223jsnf7c23217c62b'
	}
};

fetch('https://ronreiter-meme-generator.p.rapidapi.com/meme?top=Top%20Text&bottom=Bottom%20Text&meme=Condescending-Wonka&font_size=50&font=Impact', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

  return (
    <div className="cards">
      <form className='new-meme-form' onSubmit={handleSubmit}>
        <h2>Create a Meme!</h2>
          <input type="text" name="url" placeholder="Image url" value={formData.url} onChange={handleChange}/>
            <br></br>
          <input type="text" name="author" placeholder="Author" value={formData.author} onChange={handleChange}/>
            <br></br>
          <input type="text" name="topText" placeholder="Top Text" value={formData.topText} onChange={handleChange}/>
            <br></br>
          <input type="text" name="bottomText" placeholder="Bottom Text" value={formData.bottomText} onChange={handleChange}/>
            <br></br>
          <button type="submit">Add Meme</button>
      </form>
        {memes.map((meme) => <MemeCards key= {meme.id} meme={meme}/>)}
    </div>
  )
}

export default CreateAMeme