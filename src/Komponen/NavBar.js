// library
import React, {useContext, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
// komponen
import SearchBar from './SearchBar';


// stylesheet
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import User from './User';
import { AuthContext } from '../Hooks/authContext';

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
    const {user, logout} = useContext(AuthContext)
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    const onLogout = () => {
        logout();
        navigate('/')
    }
    console.log(user)
    return(
        <div >
            <Navbar bg="dark" expand="lg" fixed="top" style={{backgroundColor: "#7a4de2"}}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={()=>setShow(true)} style={{backgroundColor: "#7a4de2"}} />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/"} style={{color: "#7a4de2"}}><b>Home</b></Nav.Link>
                            <NavDropdown title="Category" id="basic-nav-dropdown" style={{backgroundColor: "#7a4de2"}}>
                                <NavDropdown.Item as={Link} to={"/category/Comedy"} style={{color: "#7a4de2"}}>Comedy</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/category/Adventure"} style={{color: "#7a4de2"}}>Adventure</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/category/Romance"} style={{color: "#7a4de2"}}>Romance</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/category/School"} style={{color: "#7a4de2"}}>School</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/category/Action"} style={{color: "#7a4de2"}}>Action</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/category/Horor"} style={{color: "#7a4de2"}}>Horor</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/category/Sci-Fi"} style={{color: "#7a4de2"}}>Sci-Fi</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/category/Conscpiracy"} style={{color: "#7a4de2"}}>Conscpiracy</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to={"/about"} style={{color: "#7a4de2"}}><b>About</b></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <SearchBar/>
                    <User />
                    {/* <Link to={`/user`} style={{ textDecoration: 'none'}}>
                        <button style={styles}>
                            <i class="bi bi-person-circle" style={{ fontSize: 25 }}></i>
                        </button> 
                    </Link> */}
                </Container>
            </Navbar>
            <br></br>
        </div>
    );
};

export default NavBar;