import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from './images/memes_logo.jpeg'


function Navigate() {

  return (
    <div className='navbar'>
      <Container>
        <Navbar className="navbar">
          <Container>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar className="navbar">
          <Container>
            <Navbar.Brand href="/" className='navbar logo'><img src={logo} alt="Memes logo" style={{width:100, marginTop: -7}}/>
            </Navbar.Brand>
              <Nav className="navbar">
                <Nav.Link className="nav-link" href="/">Home</Nav.Link>
                <Nav.Link href="/giflib">GIF Library</Nav.Link>
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