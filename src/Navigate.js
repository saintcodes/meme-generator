import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Navigate() {
  return (
    <div>
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home" className='titletext'>Navigate to: </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/giflib">GIF Library</Nav.Link>
                <Nav.Link href="/create">Create A Meme</Nav.Link>
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