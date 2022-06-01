import React, {useState, useEffect} from 'react'
import MemeCards from './MemeCards'
import Button from 'react-bootstrap/Button'

function MemeGenerator() {
  const [memes, setMemes] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
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

  const [canvasImage, setCanvasImage] = useState('https://content.hostgator.com/img/weebly_image_sample.png')
  const imageFileInput = document.querySelector('#imageFileInput')
  const topTextInput = document.querySelector('#topTextInput')
  const bottomTextInput = document.querySelector('#bottomTextInput')
  const canvas = document.querySelector('#memegenerator')

  let image;

  // topTextInput.addEventListener('change', () => {
  //   updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value)
  // })

  // bottomTextInput.addEventListener('change', () => {
  //   updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value)
  // })

  function updateMemeCanvas(canvas, image, topText, bottomText) {
    const ctx = canvas.getContext('2d');
    const width = image.width;
    const height = image.height;
    const fontSize = Math.floor(width/10)
    const yOffset = height/25

    //update canvas background
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0);

    //prepare text
    ctx.strokeStyle = 'black';
    ctx.lineWidth = Math.floor(fontSize/4)
    ctx.fillStyle = 'white'
    ctx.textAlign = 'center'
    ctx.lineJoin = 'round'
    ctx.font = `${fontSize}px sans-serif`

    //add top text
    ctx.textbaseline = 'top'
    ctx.strokeText(topText, width/2, yOffset)
    ctx.fillText(topText, width/2, yOffset)
    
    //add bottom text
    ctx.textbaseline = 'bottom'
    ctx.strokeText(bottomText, width/2, height-yOffset)
    ctx.fillText(bottomText, width/2, height-yOffset)
  }

  function imageChange () {
    const imageDataUrl = URL.createObjectURL(imageFileInput.files[0])
    image = new Image();
    image.src = imageDataUrl
    console.log(imageDataUrl)
    image.addEventListener('load', () => {
      updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value)
        }, { once: true })
  }

  function handleChange(e) {
    const {name, value} = e.target
    setFormData({...formData, 
      [name]:value})
      console.log(formData)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('submitted')
  }

  function selectImage(e) {
    image = new Image()
    image.src = (e.target.value)
    image.addEventListener('load', () => {
      updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value)
        }, { once: true })
  }

  function toggleForm () {
    setShowForm((showForm) => !showForm)
  }

  return (
    <div>
      {showForm ? <form className="zero meme-generator" onSubmit={handleSubmit}>
        <label>Select an Image</label>
          <input 
            type="file" 
            name="file" 
            id="imageFileInput" 
            onChange={imageChange}
          />
        <label>Top Text</label>
          <input 
            type="text" 
            name="topText" 
            id="topTextInput" 
            value={formData.topText} 
            onChange={handleChange}
          />
        <label className="zero">Bottom Text</label>
          <input 
            className="zero"
            type="text" 
            name="bottomText" 
            id="bottomTextInput" 
            value={formData.bottomText} 
            onChange={handleChange}
          />
        <Button 
          className="meme-generator zero"
          variant="danger" 
          type="submit"
        >Submit</Button>
      </form> : null}
      <br></br>
        <Button 
          className="zero meme-generator" 
          onClick={toggleForm} 
          variant="danger" 
          type="button"
        >Add Meme</Button>
      <canvas id='memegenerator' src={image}></canvas>
      <div className='cards'>
        {memes.map((meme) => <MemeCards selectImage={selectImage} key= {meme.id} meme={meme}/>)}
      </div>
    </div>
  )
}

export default MemeGenerator