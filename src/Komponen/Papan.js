import React from 'react';
import Bounce from 'react-reveal/Bounce';

// stylesheet
import { Accordion } from 'react-bootstrap';


const Papan = (props) => {
    return(
        <div style={{overflow: 'hidden'}}>
            <Bounce bottom cascade>
                <div>
                    <br></br>
                    <Accordion defaultActiveKey={['0']}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                {props.judul}
                            </Accordion.Header>
                            <Accordion.Body>
                                <strong>
                                    {props.highlight}
                                </strong>
                                {props.details}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    
                </div>
            </Bounce>
        </div>
    )
}


export default Papan;