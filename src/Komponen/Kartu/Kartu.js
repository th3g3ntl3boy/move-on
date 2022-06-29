import React, {Fragment, useState} from 'react';
// stylesheet
import { Card } from 'react-bootstrap';
import './Kartu.css'


const styles = {
    backgroundColor: "transparent",
    backgroundRepeat: "no-repeat",
    border: "none",
    cursor: "pointer",
    overflow: "hidden",
    outline: "none",
    color: "white"
};

const hovStar = {
    top: "4px", 
    right:"9px", 
    position: "absolute",
    backgroundColor: "black", 
    opacity: "60%",
    fontSize: "15px"
}

const hovBookmark = {
    top: "4px", 
    left:"9px", 
    position: "absolute",
    fontSize: "15px"
}

const hovJudul = {
    bottom: "4px",
    left: "9px",  
    position: "absolute",
    backgroundColor: "black", 
    opacity: "75%",
    fontSize: "15px"
}


const Kartu = (props) => {
    const[isHover, setIsHover] = useState(false)
    const[show, setShow] = useState(false)
    const [book, setBook] = useState("")

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
                                    show?
                                    <>
                                    <div style={hovBookmark}>
                                        <i class={`bi bi-bookmark${book}`}></i>
                                    </div>
                                    </>
                                    :
                                    <></>
                                }
                                {
                                    isHover &&
                                    <Fragment>
                                        <div style={hovBookmark}>
                                        <button 
                                        style={styles}
                                        onClick={()=>{
                                            setBook("-fill");
                                            setShow(true)

                                        }}
                                        >
                                            <i class="bi bi-bookmark"></i>
                                        </button>
                                            
                                        </div>
                                        <Card.Title style={hovStar}>
                                            <small>
                                                <i class="bi bi-star-fill"></i> <b>4.5</b>
                                            </small>
                                        </Card.Title>
                                        <Card.Text style={hovJudul}>
                                        <small>
                                            <b>{props.judul}</b>
                                        </small>
                                        </Card.Text>
                                    </Fragment>
                                }
                        </Card.ImgOverlay>
                    </button> 
                </Card>
            </div>
        </div>
    );
};

export default Kartu;