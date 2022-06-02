import React, {useState, useEffect} from 'react'
import MemeCards from './MemeCards'
import Button from 'react-bootstrap/Button'

function MemeGenerator() {
  const [memes, setMemes] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [canvasState, setCanvasState] = useState({
    "name": "",
    "url": "",
    "topText": "",
    "bottomText": "",
  })

  const [canvasImage, setCanvasImage] = useState("https://content.hostgator.com/img/weebly_image_sample.png")
    
  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(memes => setMemes(memes.data.memes))
  }, [])

  const canvas = document.querySelector('#memegenerator')
  let image;

  function updateMemeCanvas(canvas, image, topText, bottomText) {

    const ctx = canvas.getContext('2d');
    const width = image.width;
    const height = image.height;
    const fontSize = Math.floor(width/10)
    const yOffset = height/8

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
    ctx.strokeText(canvasState.topText, width/2, yOffset)
    ctx.fillText(canvasState.topText, width/2, yOffset)
    //add bottom text
    ctx.textbaseline = 'bottom'
    ctx.strokeText(canvasState.bottomText, width/2, height-yOffset)
    ctx.fillText(canvasState.bottomText, width/2, height-yOffset)
  }

  // function uploadChange () {
  //   const imageDataUrl = URL.createObjectURL(canvasState.url.files[0])
  //   image = new Image();
  //   image.src = imageDataUrl
  //   setCanvasState({...canvasState,
  //     "url": imageDataUrl})
  //   image.addEventListener('load', () => {
  //     updateMemeCanvas(canvas, image, canvasState.topText, canvasState.bottomText)
  //   })
  // }

  function handleChange(e) {
    image= new Image()
    image.src=canvasState.url
    const {name, value} = e.target
    setCanvasState({...canvasState, 
      [name]: value})
    updateMemeCanvas(canvas, image, canvasState.topText, canvasState.bottomText)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('submitted')
    setCanvasState({
      "url": "",
      "topText": "",
      "bottomText": "",
    })
  }

  function selectImage(e) {
    canvasState.topText = ""
    canvasState.bottomText = ""
    image = new Image()
    image.src = (e.target.value)
    setCanvasState({...canvasState,
      "url" : e.target.value})
    image.addEventListener('load', () => {
      updateMemeCanvas(canvas, image)
    })
  }

  function toggleForm () {
    setShowForm((showForm) => !showForm)
  }
  
  return (
    <div>
      <Button 
        className="zero meme-generator" 
        onClick={toggleForm} 
        variant="danger" 
        type="button"
      >Add Meme</Button>
      <br></br>
      {showForm ? <form className="zero meme-generator" onSubmit={handleSubmit}>
        {/* <label>Select an Image</label>
          <input 
            type="file" 
            name="file" 
            id="imageFileInput" 
            onChange={uploadChange}
          /> */}
        <label>URL</label>
          <input
            type="text"
            name="url"
            id="url"
            value={canvasState.url}
            onChange={handleChange}
            >
            </input>
        <label>Top Text</label>
          <input 
            type="text" 
            name="topText" 
            id="topTextInput" 
            value={canvasState.topText} 
            onChange={handleChange}
          />
        <label className="zero">Bottom Text</label>
          <input 
            className="zero"
            type="text" 
            name="bottomText" 
            id="bottomTextInput" 
            value={canvasState.bottomText} 
            onChange={handleChange}
          />
        <Button 
          className="meme-generator zero"
          variant="danger" 
          type="submit"
        >Submit</Button>
      </form> : null}
      <br></br>
      <canvas 
        className="canvasbord" 
        id='memegenerator' 
        src={canvasImage}
      ></canvas>
      <div className='cards'>
        {memes.map((meme) => <MemeCards selectImage={selectImage} key= {meme.id} meme={meme}/>)}
      </div>
    </div>
  )
}

export default MemeGenerator