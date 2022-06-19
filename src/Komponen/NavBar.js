// library
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

// komponen
import SearchBar from './SearchBar';

// stylesheet
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';


const styles = {
    backgroundColor: "transparent",
    backgroundRepeat: "no-repeat",
    border: "none",
    cursor: "pointer",
    overflow: "hidden",
    outline: "none",
    color: "#7a4de2"
};


const NavBar = () =>{
    const [show, setShow] = useState(false)
    return(
        <div >
            <Navbar bg="dark" expand="lg" fixed="top" style={{backgroundColor: "#7a4de2"}}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={()=>setShow(true)} style={{backgroundColor: "#7a4de2"}} />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/"} style={{color: "#7a4de2"}}><b>Home</b></Nav.Link>
                            <NavDropdown title="Category" id="basic-nav-dropdown" style={{backgroundColor: "#7a4de2"}}>
                                <NavDropdown.Item as={Link} to={"/category"} style={{color: "#7a4de2"}}>Category 1</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/category"} style={{color: "#7a4de2"}}>Category 2</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/category"} style={{color: "#7a4de2"}}>Category 3</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/category"} style={{color: "#7a4de2"}}>Category 4</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to={"/about"} style={{color: "#7a4de2"}}><b>About</b></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <SearchBar/>
                    <button style={styles}>
                        <i class="bi bi-person-circle" style={{ fontSize: 25 }}></i>
                    </button> 
                </Container>
            </Navbar>
            <br></br>
        </div>
    );
};

export default NavBar;