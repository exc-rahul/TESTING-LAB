import { Dropdown } from 'react-bootstrap';
import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const NavigationBar = () => {
    return (
        <>
            <Navbar expand="lg" className='Navbarclass' style={{color:"white"}} >
                <Container>
                    <Navbar.Brand href="#home" className='text-light'>React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/" className='text-light'>Home</Nav.Link>
                            <Nav.Link href="/about" className='text-light'>About</Nav.Link>
                            <Nav.Link href="/contact" className='text-light'>Contact</Nav.Link>
                            <Nav.Link href="/profile" className='text-light'>Profile</Nav.Link>
                    
                            <NavDropdown title="Booking" id="basic-nav-dropdown" className='text-light'>
                                <Dropdown >
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" className='text-light'>
                                        Test Booking
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className='Dropdownclass'>
                                        <Dropdown.Item href="/concrete-testing">Concrete Testing</Dropdown.Item>
                                        <Dropdown.Item href="/road-testing">Road Testing</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1">Transformer Testing</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1">Coal Testing</Dropdown.Item>
                                        <Dropdown.Item href="/rock-testing">Rock Testing</Dropdown.Item>
                             
                                    </Dropdown.Menu>
                                </Dropdown>


                                <NavDropdown.Item href="#action/3.2" >
                                    Report Booking
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <div>
                    <Button variant="primary" href='/register' className='Registerbtn'>Register</Button>
                    <Button variant="primary" href='/login' className='Loginbtn'>Login</Button>
                </div>
            </Navbar>
        </>
    )
}

export default NavigationBar