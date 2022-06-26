import React, {useState, useContext} from 'react'
import { SIGNUP, LOGIN } from '../Hooks/Querry'
import { useMutation } from '@apollo/client';
import { AuthContext } from '../Hooks/authContext';
// stylesheet
import {Button, Modal, Form, Alert} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';



const styles = {
    backgroundColor: "transparent",
    backgroundRepeat: "no-repeat",
    border: "none",
    cursor: "pointer",
    overflow: "hidden",
    outline: "none",
    color: "#7a4de2"
};
const User = () => {
    // koteks
    const context = useContext(AuthContext)

    // regis
    const [namauser, setNamauser] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [email, setEmail] = useState("")

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


    // mutasi
    let navigate = useNavigate()
    const [eror, setEror] = useState([])
    
    const [regis, {data : dataRegis}] = useMutation(SIGNUP,{
        update(proxy, {data: {regis: userData} }){
            context.login(userData);
            navigate('/')
        },
        onError({graphQLErrors}){
            setEror(graphQLErrors)
        },
        variables: {name: nama, pass: pass, mail: email}, 
        onCompleted: (dataRegis)=>console.log(dataRegis)
    })

    const [login, {data : dataLogin}]= useMutation(LOGIN,{
        update(proxy, {data: {login: userData} }){
            context.login(userData);
            navigate('/')
        },
        variables: {name: nama, pass: pass},
        onCompleted: (dataLogin)=>{
            localStorage.setItem("id",dataLogin.login.user.id);
            localStorage.setItem("name",dataLogin.login.user.username);
            console.log(dataLogin)
        },
        onError({graphQLErrors}){
            setEror(graphQLErrors)
        },
    })

    return (
        <div>

            <button style={styles}>
                <i class="bi bi-person-circle" style={{ fontSize: 25 }} onClick={handleShow}></i>
            </button> 

            <Modal 
            show={show} 
            onHide={handleClose} 
            backdrop="static"
            keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail" size="sm">
                            <Form.Control type="text" placeholder="User Name" onChange={(event)=>{setNama(event.target.value);}}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword" size="sm">
                            <Form.Control type="password" placeholder="Password" onChange={(event)=>{setPass(event.target.value);}}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Show password" />
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
                        <Button variant="primary" type="submit" className="text-end"
                        onClick={async (event) => {
                            await event.preventDefault();
                            login();
                        }}
                        >
                            Login
                        </Button>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <button style={styles}
                    onClick={()=>{
                        handleClose();
                        handleShow1();
                    }}
                    >
                        <p>Create Account </p>
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
                        <Form.Group className="mb-3" controlId="formBasicEmail2" size="sm">
                            <Form.Control type="text" placeholder="User Name" onChange={(event)=>{setNama(event.target.value);}}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail3" size="sm">
                            <Form.Control type="text" placeholder="Email" onChange={(event)=>{setEmail(event.target.value);}}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword1" size="sm">
                            <Form.Control type="password" placeholder="Password" onChange={(event)=>{setPass(event.target.value);}}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox1">
                            <Form.Check type="checkbox" label="Show password" />
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
                        <Button variant="primary" type="submit" className="text-end"
                        onClick={async (event) => {
                            await event.preventDefault();
                            await regis();
                            login();
                        }}
                        >
                            Regist
                        </Button>
                    </Form>
                </Modal.Body>
                
                <Modal.Footer>
                    <button style={styles}
                    onClick={()=>{
                        handleClose1();
                        handleShow();
                    }}
                    >
                        <p>Already have account ?</p>
                    </button>
                </Modal.Footer>
            </Modal>
            
        </div>
    )
}

export default User