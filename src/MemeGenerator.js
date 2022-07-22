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
  const imageFileInput = document.querySelector('#imageFileInput')
  let image;

  function handleChange(e) {
    image= new Image()
    image.src=canvasState.url
    updateMemeCanvas(canvas, image)
    setCanvasState({...canvasState,
      "url": e.target.value,
      "topText": "",
      "bottomText": "",
    })
 }

  function toggleForm () {
    setShowForm((showForm) => !showForm)
  }

  function handleChangeTop(e) {
    image= new Image()
    image.src=canvasState.url
    updateMemeCanvas(canvas, image, e.target.value, canvasState.bottomText)
    setCanvasState({...canvasState, 
     'topText': e.target.value})
 }

  function handleChangeBottom(e) {
    image= new Image()
    image.src=canvasState.url
    image.crossOrigin='anonymous'
    updateMemeCanvas(canvas, image, canvasState.topText, e.target.value)
    setCanvasState({...canvasState, 
     "bottomText": e.target.value})
 }
 
 function updateMemeCanvas(canvas, image, toptext, bottomtext) {
    const ctx = canvas.getContext('2d');
    const width = image.width;
    const height = image.height;
    const fontSize = Math.floor(width/15)
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
    ctx.strokeText(toptext, width/2, yOffset)
    ctx.fillText(toptext, width/2, yOffset)
    //add bottom text
    ctx.textbaseline = 'bottom'
    ctx.strokeText(bottomtext, width/2, height-yOffset)
    ctx.fillText(bottomtext, width/2, height-yOffset)
  }

  function uploadImage () {
    canvasState.topText = ""
    canvasState.bottomText = ""
    image = new Image();
    const imageDataUrl = URL.createObjectURL(imageFileInput.files[0])
    image.src = imageDataUrl
    setCanvasState({...canvasState,
      "url" : imageDataUrl,
      "topText": " ",
      "bottomText": " ",
    })
    image.addEventListener('load', () => {updateMemeCanvas(canvas, image)})
  }
  
  function selectImage(e) {
    canvasState.topText = ""
    canvasState.bottomText = ""
    image = new Image()
    image.src = (e.target.value)
    setCanvasState({...canvasState,
      "url" : e.target.value,
      "topText": "",
      "bottomText": "",
    })
    image.addEventListener('load', () => {updateMemeCanvas(canvas, image)})
    window.scrollTo(0,200)
  }

  function handleDownload(e) {
    setCanvasState({
      "url": "",
      "topText": "",
      "bottomText": "",
    })
    let canvasUrl = canvas.toDataURL("image/jpeg", 0.5);
    console.log(canvasUrl);
    const createEl = document.createElement('a');
    createEl.href = canvasUrl;
    createEl.download = "download-this-canvas";
    createEl.click();
    createEl.remove();
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
      {showForm ? <form className="zero meme-generator">
        <label>Select an Image</label>
          <input 
            type="file" 
            name="file" 
            id="imageFileInput" 
            onChange={uploadImage}
          />
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
            onChange={handleChangeTop}
          />
        <label className="zero">Bottom Text</label>
          <input 
            className="zero"
            type="text" 
            name="bottomText" 
            id="bottomTextInput" 
            value={canvasState.bottomText} 
            onChange={handleChangeBottom}
          />
        <Button 
          id='download' 
          className="meme-generator zero"
          variant="danger" 
          type="button"
          onClick={handleDownload}
        >Download</Button>
      </form> : null}
      <br></br>
      <canvas
        className="canvasbord" 
        id='memegenerator' 
        src={canvasImage}
      >
      </canvas>
      <div className='cards'>
        {memes.map((meme) => <MemeCards selectImage={selectImage} key= {meme.id} meme={meme}/>)}
      </div>
    </div>
  )
}

export default MemeGenerator