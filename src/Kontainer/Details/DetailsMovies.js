import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import Carousel from 'react-elastic-carousel';


// komponen
import Kartu from '../../Komponen/Kartu/Kartu.js';

// stylesheet
import Animasi from '../../Komponen/Animasi';
import './DetailsMovies.css'

const breaker = [
    {width:1, itemsToShow: 1},
    {width:150, itemsToShow: 2, verticalMode: false},
    {width:300, itemsToShow: 2, verticalMode: false},
    {width:450, itemsToShow: 4},
    {width:600, itemsToShow: 5},
    {width:750, itemsToShow: 6}
]

const DetailsMovies= () => {
    return(
        <Animasi>
            <Container>
                <Row >
                    <Col style={{color: "white"}}>
                    <br></br>
                    <div className="video-responsive">
                        <iframe
                            width="700"
                            height="400"
                            src={`https://www.youtube.com/embed/8NnQs3EtoqU`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                    </div>
                        <h3>Neck Deep - December</h3>
                        <div style={{display: "inline"}}>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star"></i>
                            <p>4.3 (<i class="bi bi-people-fill"></i> 18)</p>
                        </div>
                        
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <br></br>
                        <br></br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        
                        <br></br>
                        <br></br>

                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Comment.."
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button 
                            variant="outline-secondary"
                            >Post</Button>
                        </Form>
                        <br></br>
                        <div className="text-center">
                            <p><em><i>no comment just yet</i></em></p>
                        </div>

                    </Col>
                    <Col md="auto">
                    </Col>
                    <Col xs lg="4" className="my-4">
                        <h3 style={{color: "white"}}>
                            You may also like
                        </h3>
                        <div className="styling-example">
                            <Carousel breakPoints={breaker} enableAutoPlay="true" autoPlaySpeed="4500" transitionMs="1000" showArrows={false} pagination={false} verticalMode={true} itemPadding={[10]} initialActiveIndex={1} outerSpacing={80}>
                                <Link to="/moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                        <Kartu
                                        sumber={require("../../Aset/1166008798_2.webp")}
                                        judul="Prediction" 
                                        detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                        list="Regression" />
                                </Link>
                                <Link to="/moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                        <Kartu
                                        sumber={require("../../Aset/1166008798_2.webp")}
                                        judul="Prediction" 
                                        detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                        list="Regression" />
                                </Link>
                                <Link to="/moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                        <Kartu
                                        sumber={require("../../Aset/1165953918_2.webp")}
                                        judul="Prediction" 
                                        detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                        list="Regression" />
                                </Link>
                                <Link to="/moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                        <Kartu
                                        sumber={require("../../Aset/1166008798_2.webp")}
                                        judul="Prediction" 
                                        detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                        list="Regression" />
                                </Link>
                                <Link to="/moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                        <Kartu
                                        sumber={require("../../Aset/1165974181_2.webp")}
                                        judul="Prediction" 
                                        detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                        list="Regression" />
                                </Link>
                                <Link to="/moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                        <Kartu
                                        sumber={require("../../Aset/1166008798_2.webp")}
                                        judul="Prediction" 
                                        detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                        list="Regression" />
                                </Link>
                            </Carousel>
                        </div>


                        <h3 style={{color: "white"}}>
                            More Romance Movies
                        </h3>
                        <div className="styling-example" onMouseMove={(e) => console.log(e.pageX - e.target.offsetTop)}>
                            <Carousel breakPoints={breaker} enableAutoPlay="true" autoPlaySpeed="5000" transitionMs="1000" showArrows={false} pagination={false} verticalMode={true} itemPadding={[10]} initialActiveIndex={1} outerSpacing={80}>
                                <Link to="/moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                        <Kartu
                                        sumber={require("../../Aset/1166008798_2.webp")}
                                        judul="Prediction" 
                                        detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                        list="Regression" />
                                </Link>
                                <Link to="/moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                        <Kartu
                                        sumber={require("../../Aset/1166008798_2.webp")}
                                        judul="Prediction" 
                                        detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                        list="Regression" />
                                </Link>
                                <Link to="/algorithm/prediction" style={{ textDecoration: 'none', color: 'black' }}>
                                        <Kartu
                                        sumber={require("../../Aset/1165953918_2.webp")}
                                        judul="Prediction" 
                                        detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                        list="Regression" />
                                </Link>
                                <Link to="/algorithm/prediction" style={{ textDecoration: 'none', color: 'black' }}>
                                        <Kartu
                                        sumber={require("../../Aset/1166008798_2.webp")}
                                        judul="Prediction" 
                                        detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                        list="Regression" />
                                </Link>
                                <Link to="/algorithm/prediction" style={{ textDecoration: 'none', color: 'black' }}>
                                        <Kartu
                                        sumber={require("../../Aset/1165974181_2.webp")}
                                        judul="Prediction" 
                                        detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                        list="Regression" />
                                </Link>
                                <Link to="/algorithm/prediction" style={{ textDecoration: 'none', color: 'black' }}>
                                        <Kartu
                                        sumber={require("../../Aset/1166008798_2.webp")}
                                        judul="Prediction" 
                                        detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                        list="Regression" />
                                </Link>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Animasi>
    )
}; 




export default DetailsMovies;