import React, {useState} from 'react'

function MemeGenerator() {
  const [formData, setFormData] = useState({
    "name": "",
    "url": "",
    "author": "",
    "topText": "",
    "bottomText": "",
  })
  const [memeCanvas, setMemeCanvas] = useState({
    'image': "",
    'width': "",
    'height': "",
  })
  const [canvasImage, setCanvasImage] = useState('https://media.moddb.com/images/members/5/4550/4549205/duck.jpg')

  const imageFileInput = document.querySelector('#imageFileInput')
  const topTextInput = document.querySelector('#topTextInput')
  const bottomTextInput = document.querySelector('#bottomTextInput')
  const canvas = document.querySelector('#meme')

  let image;

  // imageFileInput.addEventListener('change', () => {
  //   const imageDataUrl = URL.createObjectURL(imageFileInput.files[0])

  //   image = new Image()
  //   image.src = imageDataUrl
  //   image.addEventListener('load', () => {
  //     updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value)
  //   }, { once: true })
    
  // })

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

  function imageChange (e) {
    console.log(e)
    const imageDataUrl = URL.createObjectURL(imageFileInput.files[0])
    image = new Image()
    image.src = imageDataUrl
    image.addEventListener('load', () => {
          updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value)
        }, { once: true })
    console.log(imageDataUrl)
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

  return (
    <div className="meme generator">
      <form onSubmit={handleSubmit}>
        <label>Select an Image</label>
          <input 
            type="file" 
            name="file" 
            id="imageFileInput" 
            onChange={imageChange}
          />
          <br></br>
        <label>Top Text</label>
          <input 
            type="text" 
            name="topText" 
            id="topTextInput" 
            value={formData.topText} 
            onChange={handleChange}
          />
          <br></br>
        <label>Bottom Text</label>
          <input 
            type="text" 
            name="bottomText" 
            id="bottomTextInput" 
            value={formData.bottomText} 
            onChange={handleChange}
          />
          <br></br>
        <button type="submit">Add Meme</button>
      </form>
      <canvas id='memegenerator' src={canvasImage}></canvas>
    </div>
  )
}

export default MemeGenerator