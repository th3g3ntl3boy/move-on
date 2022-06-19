import React from 'react'
import {Container, Row, Col, Figure, Alert} from 'react-bootstrap'

const Komen = (props) => {
  return (
    <div>
        <Container>
                <Row>
                    <Col xs={3} className="my-4 left-center align-center">
                        <Figure>
                            <Figure.Image
                                className="rounded-5 border border-5 opacity-75"
                                width={90}
                                height={100}
                                alt="GIGACHAD"
                                src={require("../Aset/chad.png")}
                            />
                            <Figure.Caption>
                                anonymous user
                            </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col xs={9} className="left-center">
                        <Alert variant="light">
                            {props.comment}
                        </Alert>
                        <small>commented at {props.tanggal}</small>
                    </Col>
                </Row>
            </Container>
       
        
    </div>
  )
}

export default Komen