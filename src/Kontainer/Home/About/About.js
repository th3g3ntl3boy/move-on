import React from 'react';
import Animasi from '../../../Komponen/Animasi';
import Typewriter from 'typewriter-effect';
import { Container, Row, Col } from 'react-bootstrap';

const About= () => {
    return(
        <Animasi>
            <div className="text-center" style={{color: "white"}}>
                <h1>About us</h1>
                <hr style={{color: "#7a4de2"}}></hr>
            </div>

            <Container>
                <Row >
                    <h1 style={{color: "white"}} className="text-center">
                        <Typewriter
                            options={{
                                strings: ['Agif', 'Teresia', 'Afick', 'Farhan'],
                                autoStart: true,
                                loop: true,
                                delay: 100,
                                pauseFor: 1000
                            }}
                        />
                    </h1>
                </Row>
                
            </Container>
            
           
        </Animasi>
        
    )
}; 




export default About;