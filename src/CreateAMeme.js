import React, {useState} from 'react'

function CreateAMeme() {
  const [formData, setFormData] = useState ({

  })


  return (
    <div className="new-meme-form">
      <h2>Create a Meme!</h2>
      <form>
        <input type="text" name="name" placeholder="Meme name" value={formData.name} />
        <br></br>
        <input type="text" name="image" placeholder="Image or GIF url" value={formData.value} />
        {/* <br></br> */}
        <input type="text" name="author" placeholder="Author" value={formData.price} />
        {/* <br></br> */}
        <input type="text" name="top-text" placeholder="Top Text" />
        {/* <br></br> */}
        <input type="text" name="bottom-text" placeholder="Bottom Text" />
        <button type="submit">Add Meme</button>
      </form>
    </div>
  )
}

export default CreateAMeme