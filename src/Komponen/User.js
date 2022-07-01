import React, {useState, useContext} from 'react'
import { SIGNUP, LOGIN } from '../Hooks/Querry'
import { useMutation } from '@apollo/client';
import { AuthContext } from '../Hooks/authContext';
// stylesheet
import {Button, Modal, Form, Alert, Dropdown, Row, Col, FloatingLabel} from 'react-bootstrap'
import { Link, useNavigate} from 'react-router-dom';
import { Fade } from 'react-reveal';



const styles = {
    backgroundColor: "transparent",
    backgroundRepeat: "no-repeat",
    border: "none",
    cursor: "pointer",
    overflow: "hidden",
    outline: "none",
    color: "#7a4de2",
   
};


const User = () => {
    // koteks
    const context = useContext(AuthContext)
    const {user, logout} = useContext(AuthContext)
    let navigate = useNavigate()
    
    const onLogout = () => {
        logout();
        localStorage.clear();
        navigate('/')
    }
   
    // regis
    const [email, setEmail] = useState("")
    const [gender, setGender]= useState()
    const sex = {
        Man: 0,
        Woman: 1,
        0: "Man",
        1: "Woman"
    }
    // login
    const [nama, setNama] = useState("")
    const [pass, setPass] = useState("")


    // modal trigger login
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // modal trigger sign in
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    // show pass
    const [showPass, setShowPass] = useState("password")

    // mutasi
    const [eror, setEror] = useState([])
    
    // regis mutation
    const [regis, {data : dataRegis}] = useMutation(SIGNUP,{
        update(proxy, {data: {regis: userData} }){
            context.login(userData);
            window.location.reload()
        },
        onError({graphQLErrors}){
            setEror(graphQLErrors)
        },
        variables: {name: nama, pass: pass, mail: email, gender: gender}, 
        onCompleted: (dataRegis)=>console.log(dataRegis)
    })

    // login mutation
    const [login, {data : dataLogin}]= useMutation(LOGIN,{
        update(proxy, {data: {login: userData} }){
            context.login(userData);
            console.log(userData);
            localStorage.setItem("name", userData.user.username);
            window.location.reload()
            
        },
        variables: {name: nama, pass: pass},
        onCompleted: (dataLogin)=>{
            console.log(dataLogin)
        },
        onError({graphQLErrors}){
            setEror(graphQLErrors)
        },
    })

    return (
        <div>
         

            {
                user? 
                
                <>  

                    <Dropdown align="end">
                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" style={styles}>
                           
                            <i class="bi bi-person-circle" style={{ fontSize: 25 }} ></i>
                            
                        </Dropdown.Toggle>
                       
                        <Dropdown.Menu >
                        <Dropdown.Item as={Link} to={`/user/${user?.id}`}>
                            <small style={styles}>
                            <i class="bi bi-person-lines-fill"></i> Profile    
                            </small>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={onLogout} >
                            <small style={styles}>
                            <i class="bi bi-box-arrow-right" style={{ fontSize: 15 }} ></i> Log out 
                            </small>
                        </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </> 
                
                : 
                
                <>
                    <button style={styles} onClick={handleShow}>
                        <i class="bi bi-person-circle" style={{ fontSize: 25 }} ></i>
                    </button> 
                   
                        <Modal 
                        show={show} 
                        onHide={handleClose} 
                        backdrop="static"
                        keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Login</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <Form>
                                    <FloatingLabel className="mb-3" controlId="floatingInputGrid" label="User Name">
                                        <Form.Control type="text" placeholder="User Name" onChange={(event)=>{setNama(event.target.value)}}/>
                                    </FloatingLabel>
                                    <FloatingLabel className="mb-3" controlId="floatingPassword" label="Password">
                                        <Form.Control type={showPass} placeholder="Password" onChange={(event)=>{setPass(event.target.value);}}/>
                                    </FloatingLabel>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Show password" 
                                        onClick={()=>{
                                            showPass==="password" ?
                                            setShowPass("text") : setShowPass("password")
                                            }}/>
                                    </Form.Group>
                                    {
                                        eror.map((error) =>{
                                            return(
                                                <Alert variant='danger'>
                                                    {error.message}
                                                </Alert>
                                            )
                                        })
                                    }
                                    <div className="text-end">
                                        <Button variant="primary" type="submit" 
                                        onClick={async (event) => {
                                            await event.preventDefault();
                                            await login();
                                        }}
                                        >
                                            Login
                                        </Button>

                                    </div>
                                    
                                </Form>
                            </Modal.Body>
                                <Modal.Footer  >
                            
                                    <button style={styles}
                                    onClick={()=>{
                                        handleClose();
                                        handleShow1();
                                    }}
                                    >
                                        <small>
                                            <em>Create Account ?</em>
                                        </small>
                                    </button>
                        
                                </Modal.Footer>
                        </Modal>
                   


                    
                    <Modal 
                    show={show1} 
                    onHide={handleClose1} 
                    backdrop="static"
                    keyboard={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>Register</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Form>
                                <FloatingLabel className="mb-3" controlId="floatingInputGrid1" label="User Name" size="sm">
                                    <Form.Control type="text" placeholder="User Name" onChange={(event)=>{setNama(event.target.value);}}/>
                                </FloatingLabel>
                                <Row className="g-2">
                                    <Col md>
                                        <FloatingLabel className="mb-3" controlId="floatingInputGrid" label="Email address">
                                            <Form.Control type="text" placeholder="Email" onChange={(event)=>{setEmail(event.target.value);}}/>
                                        </FloatingLabel>
                                    </Col>
                                    <Col md>
                                        <FloatingLabel className="mb-3" controlId="floatingSelectGrid" label="Choose Gender">
                                        <Form.Select aria-label="Floating label select example" onChange={(event)=>{setGender(event.target.value)}}>
                                            <option value={sex[0]} defaultChecked>Man</option>
                                            <option value={sex[1]}>Woman</option>
                                        </Form.Select>
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <FloatingLabel className="mb-3" controlId="floatingPassword1" label="Password">
                                    <Form.Control type={showPass} placeholder="Password" onChange={(event)=>{setPass(event.target.value);}}/>
                                </FloatingLabel>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox1">
                                    <Form.Check type="checkbox" label="Show password" 
                                    onClick={()=>{
                                        showPass==="password" ?
                                        setShowPass("text") : setShowPass("password")
                                        }}/>
                                </Form.Group>
                                {
                                    eror.map((error) =>{
                                        return(
                                            <Alert variant='danger'>
                                                {error.message}
                                            </Alert>
                                        )
                                    })
                                }
                                <div className="text-end">
                                    <Button variant="primary" type="submit" className="text-end"
                                    onClick={async (event) => {
                                        await event.preventDefault();
                                        await regis();
                                        login();
                                        
                                    }}
                                    >
                                        Regist
                                    </Button>
                                </div>
                            </Form>
                        </Modal.Body>
                        
                        <Modal.Footer>
                            <button style={styles}
                            onClick={()=>{
                                handleClose1();
                                handleShow();
                            }}
                            >
                                <small>
                                    <em>Already have account ?</em>
                                </small>
                            </button>
                        </Modal.Footer>
                    </Modal>
                </>
            }

            
            
        </div>
    )
}

export default User