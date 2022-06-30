import React from 'react'
import {Container, Row, Col, Figure, Alert} from 'react-bootstrap'
import './Komen.css'



const styles = {
    backgroundColor: "transparent",
    backgroundRepeat: "no-repeat",
    border: "none",
    cursor: "pointer",
    overflow: "hidden",
    outline: "none",
    color: "white"
};

const Komen = (props) => {
  return (
    <div>
        <Container>
            <Row className="align-items-center">
                <hr></hr>
                <Col xs={2} className="my-4 left-center align-center">
                    <Figure>
                        <div className="repons">
                            <div className='text-center'>
                                <i class="bi bi-person-circle" style={{ fontSize: 40 }}></i>
                            </div>
                            <small>
                                <Figure.Caption className="text-center">
                                    {props.user}
                                </Figure.Caption>
                            </small>
                        </div>
                    </Figure>
                </Col>
                <Col xs={9} className="left-center">
                    <div className="respons-comment">
                        {props.comment}
                        <div className="text-end">
                            <i class="bi bi-reply-fill"></i><small><em> commented at {props.date} </em></small>
                        </div>
                    </div>
                </Col>
                <Col xs={1} className="left-center">
                    <div className="up">
                        <div className='text-center'>
                        <button 
                        style={styles}
                        onClick={()=>{
                        }}>
                            <i class="bi bi-caret-up" style={{ fontSize: 25 }}></i>
                        </button>
                        {' '}{props.like}{' '}
                        <button 
                        style={styles}
                        onClick={()=>{
                        }}>
                            <i class="bi bi-caret-down" style={{ fontSize: 25 }}></i>
                        </button>
                    </div>

                    </div>
                </Col>
                <hr></hr>
            </Row>
        </Container>
    </div>
  )
}

export default Komen