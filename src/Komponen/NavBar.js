// library
import React, {useContext, useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { GETCATEGORY } from '../Hooks/Querry';
import { useQuery } from '@apollo/client/react';
// komponen
import SearchBar from './SearchBar';
// stylesheet
import {Navbar, Container, Nav, NavDropdown, Button} from 'react-bootstrap';
import User from './User';


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
    const {data} = useQuery(GETCATEGORY)
    console.log(data)
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    return(
        <div >
            <Navbar bg="dark" expand="lg" fixed="top" style={{backgroundColor: "#7a4de2"}}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={()=>setShow(true)} style={{backgroundColor: "#7a4de2"}} />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/"} style={{color: "#7a4de2"}}><b>Home</b></Nav.Link>
                            <NavDropdown title="Category" id="basic-nav-dropdown" style={{backgroundColor: "#7a4de2"}}>
                                {   
                                    data?.categories.data.map((cat)=>(
                                        <NavDropdown.Item as={Link} to={`/category/${cat.id}`} style={{color: "#7a4de2"}}>{cat.attributes.category}</NavDropdown.Item>
                                    ))
                                }
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