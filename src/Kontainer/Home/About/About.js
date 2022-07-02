import React from 'react';
import Animasi from '../../../Komponen/Animasi';
import Typewriter from 'typewriter-effect';
import { Container, Row, Col, Figure } from 'react-bootstrap';
import './About.css'
import Fade from 'react-reveal/Fade';
const About= () => {
    return(
        <Animasi>
            <div className="text-center" style={{color: "white"}}>
                <h1>About</h1>
                <hr style={{color: "#7a4de2"}}></hr>
            </div>

            <Container>
                <Row className="justify-content-md-center">
                        <Col md={5} className="text-center" style={{color: "white"}}>
                        <i class="bi bi-exclamation-circle"></i> Disclaimer :
                        <p><em>" this website does not do any <b>commercial use</b> or <b>looking for any profit </b>
                        or some kind of business stuff, of course not, we just building this website for <b>exercise purpose "</b>
                        </em></p>

                        </Col>
                        <hr style={{color: "#7a4de2"}}></hr>
                    <div className='text-center' style={{color: "white"}} >
                        <h1>Contributors: </h1>
                        <h3>
                            <Typewriter
                                options={{
                                    strings: ['Alghifari Arief Noerwangsa', 'Farhan Fadhil', 'Taufiq Akbar', 'Theresia Devina Rumahorbo'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 100,
                                    pauseFor: 1000
                                }}
                            />
                        </h3>
                    </div>
                    <hr style={{color: "#7a4de2"}}></hr>
                        
                        <div className='text-center' style={{color: "white"}} >
                        <h3>Thanks for the YouTube tutorial </h3>
                        <h5>



                    <Row className="justify-content-md-center">
                      
                        <Col lg={2} xs={6} md={3} className="my-2">
                            <Fade duration={2000} delay={500}>
                                <Figure style={{padding :"10px", margin: "20px",border: "1px solid #7a4de2"}}>
                                    <Figure.Image
                                        width={130}
                                        height={150}
                                        className ="rounded"
                                        src={require('../../../Aset/channels4_profile.jpg')}
                                    />
                                    <Figure.Caption>
                                        <small>
                                            Pedro Tech
                                        </small>
                                    </Figure.Caption>
                                </Figure>
                            </Fade>
                        </Col>

                        <Col lg={2} xs={6} md={3} className="my-2">
                        <Fade duration={2000} delay={1000}>

                            <Figure style={{padding :"10px", margin: "20px",border: "1px solid #7a4de2"}}>
                                <Figure.Image
                                    width={130}
                                    height={150}
                                    className ="rounded"
                                    src={require('../../../Aset/channels4_profile (1).jpg')}
                                    />
                                <Figure.Caption>
                                    <small>
                                        Laith Academy
                                    </small>
                                </Figure.Caption>
                            </Figure>
                        </Fade>
                        </Col>

                        <Col lg={2} xs={6} md={3} className="my-2">
                        <Fade duration={2000} delay={1500}>

                            <Figure style={{padding :"10px", margin: "20px",border: "1px solid #7a4de2"}}>
                                <Figure.Image
                                    width={130}
                                    height={150}
                                    className ="rounded"
                                    src={require('../../../Aset/unnamed (1).jpg')}
                                    />
                                <Figure.Caption>
                                    <small>
                                        Cooper Codes
                                    </small>
                                </Figure.Caption>
                            </Figure>
                        </Fade>
                        </Col>

                        <Col lg={2} xs={6} md={3} className="my-2">
                        <Fade duration={2000} delay={2000}>

                            <Figure style={{padding :"10px", margin: "20px",border: "1px solid #7a4de2"}}>
                                <Figure.Image
                                    width={130}
                                    height={150}
                                    className ="rounded"
                                    src={require('../../../Aset/unnamed.jpg')}
                                    />
                                <Figure.Caption>
                                    <small>
                                        Net Ninja
                                    </small>
                                </Figure.Caption>
                            </Figure>
                        </Fade>
                        </Col>

                        <Col lg={2} xs={6} md={3} className="my-2">
                        <Fade duration={2000} delay={2500}>

                            <Figure style={{padding :"10px", margin: "20px",border: "1px solid #7a4de2"}}>
                                <Figure.Image
                                    width={130}
                                    height={150}
                                    className ="rounded"
                                    src={require('../../../Aset/unnamed (2).jpg')}
                                    />
                                <Figure.Caption>
                                    <small>
                                        WPU
                                    </small>
                                </Figure.Caption>
                            </Figure>
                        </Fade>
                        </Col>
                    </Row>
                        </h5>
                    </div>
                </Row>
                
            </Container>
            
           
        </Animasi>
        
    )
}; 




export default About;