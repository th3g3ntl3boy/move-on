import React from 'react'
import {Container, Row, Col, Figure, Alert} from 'react-bootstrap'
import './Komen.css'
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
                                <i class="bi bi-person-circle" style={{ fontSize: 30 }}></i>
                            </div>
                            <small>
                                <Figure.Caption className="text-center">
                                    anonymous user
                                </Figure.Caption>
                            </small>
                        </div>
                    </Figure>
                </Col>
                <Col xs={9} className="left-center">
                    <div className="respons-comment">
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used
                        In publishing and graphic design
                    
                    <div className="text-end">
                    <small><em>commented at 20:40 PM </em></small>
                    </div>

                    </div>
                </Col>
                <Col xs={1} className="left-center">
                    <div className="up">
                        <div className='text-center'>
                        <i class="bi bi-caret-up-fill" style={{ fontSize: 25 }}></i>
                        12
                        <i class="bi bi-caret-down" style={{ fontSize: 25 }}></i>
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