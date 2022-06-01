import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Navigate() {

  return (
    <div className='navbar'>
      <Container>
        <Navbar className="navbar">
          <Container>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar className="navbar">
          <Container>
            <Navbar.Brand href="/" className='navbar logo'><img src="https://ih1.redbubble.net/image.1030848299.7534/st,small,845x845-pad,1000x1000,f8f8f8.jpg" alt="Memes logo" style={{width:100, marginTop: -7}}/>
            </Navbar.Brand>
              <Nav className="navbar">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/giflib">GIF Library</Nav.Link>
                {/* <Nav.Link href="/create">Create A Meme</Nav.Link> */}
                <Nav.Link href="/memegenerator">Meme Generator</Nav.Link>
              </Nav>
          </Container>
            </Navbar>
          </Container>
        </Navbar>
      </Container>
    </div>
  )
}

export default Navigate