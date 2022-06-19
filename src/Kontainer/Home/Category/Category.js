import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import { Bounce } from 'react-reveal';
// Komponen

import Animasi from '../../../Komponen/Animasi';
import Kartu from '../../../Komponen/Kartu/Kartu';


const styles = {
    backgroundColor: "transparent",
    backgroundRepeat: "no-repeat",
    border: "none",
    cursor: "pointer",
    overflow: "hidden",
    outline: "none",
};

const Category= () => {
    return(
        <Animasi>
                <div className="text-center" style={{color: "white"}}>
                    <h1>Category</h1>
                    <hr style={{color: "#7a4de2"}}></hr>
                </div>

                <Container >
                    <div style={{overflow: 'hidden'}}>
                    <Bounce bottom>
                    <Row justify-content-md-center>
                        <Col lg={2} xs={6} md={3} className="my-2">
                            <Link to="/moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                    <Kartu
                                    sumber={require("../../../Aset/1165953918_2.webp")}
                                    judul="Prediction" 
                                    detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                    list="Regression" />
                            </Link>
                        </Col>
                        <Col lg={2} xs={6} md={3} className="mx-0 my-2">
                            <Link to="/moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                    <Kartu
                                    sumber={require("../../../Aset/1166008798_2.webp")}
                                    judul="Prediction" 
                                    detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                    list="Regression" />
                            </Link>
                        </Col>
                        <Col lg={2} xs={6} md={3} className="my-2">
                            <Link to="/moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                    <Kartu
                                    sumber={require("../../../Aset/1166008798_2.webp")}
                                    judul="Prediction" 
                                    detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                    list="Regression" />
                            </Link>
                        </Col>
                        <Col lg={2} xs={6} md={3} className="my-2">
                            <Link to="/moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                    <Kartu
                                    sumber={require("../../../Aset/1166008798_2.webp")}
                                    judul="Prediction" 
                                    detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                    list="Regression" />
                            </Link>
                        </Col>
                        <Col lg={2} xs={6} md={3} className="my-2">
                            <Link to="/moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                    <Kartu
                                    sumber={require("../../../Aset/1166008798_2.webp")}
                                    judul="Prediction" 
                                    detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                    list="Regression" />
                            </Link>
                        </Col>
                        <Col lg={2} xs={6} md={3} className="my-2">
                            <Link to="/moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                    <Kartu
                                    sumber={require("../../../Aset/1166008798_2.webp")}
                                    judul="Prediction" 
                                    detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                    list="Regression" />
                            </Link>
                        </Col>
                        <Col lg={2} xs={6} md={3} className="my-2">
                            <Link to="/moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                    <Kartu
                                    sumber={require("../../../Aset/1166008798_2.webp")}
                                    judul="Prediction" 
                                    detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                    list="Regression" />
                            </Link>
                        </Col>
                        <Col lg={2} xs={6} md={3} className="my-2">
                            <Link to="/moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                    <Kartu
                                    sumber={require("../../../Aset/1166008798_2.webp")}
                                    judul="Prediction" 
                                    detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                    list="Regression" />
                            </Link>
                        </Col>
                        <Col lg={2} xs={6} md={3} className="my-2">
                            <Link to="/moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                    <Kartu
                                    sumber={require("../../../Aset/1166008798_2.webp")}
                                    judul="Prediction" 
                                    detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                    list="Regression" />
                            </Link>
                        </Col>
                        <Col lg={2} xs={6} md={3} className="my-2">
                            <Link to="/moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                    <Kartu
                                    sumber={require("../../../Aset/1166008798_2.webp")}
                                    judul="Prediction" 
                                    detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                    list="Regression" />
                            </Link>
                        </Col>
                        <Col lg={2} xs={6} md={3} className="my-2">
                            <Link to="/moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                    <Kartu
                                    sumber={require("../../../Aset/1166008798_2.webp")}
                                    judul="Prediction" 
                                    detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                    list="Regression" />
                            </Link>
                        </Col>
                        <Col lg={2} xs={6} md={3} className="my-2">
                            <Link to="/moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                    <Kartu
                                    sumber={require("../../../Aset/1166008798_2.webp")}
                                    judul="Prediction" 
                                    detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                    list="Regression" />
                            </Link>
                        </Col>
                    </Row>
                    <br></br>
                    <div className="text-center" >
                        <button style={styles}>
                            <p style={{color: "white"}}><em><i>load more</i></em></p>
                        </button>
                    </div>
                    </Bounce>
                    </div>

                </Container>
        </Animasi>
      
    )
}; 




export default Category;