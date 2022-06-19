import React, {useState} from 'react';
// stylesheet
import { Card } from 'react-bootstrap';
import { Fade} from 'react-reveal';
import './Kartu.css'


const styles = {
    backgroundColor: "transparent",
    backgroundRepeat: "no-repeat",
    border: "none",
    cursor: "pointer",
    overflow: "hidden",
    outline: "none",
    color: "#7a4de2"
};


const Kartu = (props) => {
    const[isHover, setIsHover] = useState(false)

    return (
        <div style={{overflow: 'hidden'}}>
            <div
            onMouseEnter={()=>setIsHover(true)}
            onMouseLeave={()=>setIsHover(false)}
            >
                <Card className="hov" style={styles} >
                    <button style={styles}>
                        <Card.Img variant="top" 
                            src={props.sumber} 
                            width={150}
                            height={200}
                            className="rounded"/>
                            <Card.ImgOverlay >
                                {
                                    isHover &&
                                    <Fade duration={350}>
                                        <Card.Title>
                                            <small style={{backgroundColor: "black", opacity: "65%"}}>
                                                <i class="bi bi-star-fill"></i> 4.5
                                            </small>
                                        </Card.Title>
                                    </Fade>
                                }
                        </Card.ImgOverlay>
                    </button> 
                </Card>
            </div>
        </div>
    );
};

export default Kartu;