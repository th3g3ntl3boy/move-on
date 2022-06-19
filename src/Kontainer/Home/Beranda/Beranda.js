// library
import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import Carousel from 'react-elastic-carousel';

// komponen
import Kartu from '../../../Komponen/Kartu/Kartu.js';

// stylesheet
import './Beranda.css'
import Bounce from 'react-reveal/Bounce';
import { Container, Row, Col} from 'react-bootstrap';
import Header from '../../../Komponen/Header.js';
import Animasi from '../../../Komponen/Animasi.js';


const breaker = [
    {width:1, itemsToShow: 1},
    {width:150, itemsToShow: 2},
    {width:300, itemsToShow: 2, outerSpacing: 80},
    {width:450, itemsToShow: 4},
    {width:600, itemsToShow: 5},
    {width:750, itemsToShow: 6, outerSpacing: 80}
]

const Beranda = () => {
    return(
        <Animasi>
            <Fragment>
                <Header></Header>
                <Container fluid="sm">
                        <div style={{overflow: 'hidden'}}>
                        <Bounce right>
                        <Row className="flex-column-reverse flex-md-row align-items-center" onMouseMove={(e) => console.log(e.pageX - e.target.offsetTop)}>
                                <Col>
                                <div className="styling-example">
                                <Carousel breakPoints={breaker} enableAutoPlay="true" autoPlaySpeed="4500" transitionMs="1000" showArrows={false} pagination={false} initialActiveIndex={1}>
                                        <Link to="moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                                <Kartu
                                                sumber={require("../../../Aset/1166008798_2.webp")}
                                                judul="Prediction" 
                                                detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                                list="Regression" />
                                        </Link>
                                        <Link to="moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                                <Kartu
                                                sumber={require("../../../Aset/1166008798_2.webp")}
                                                judul="Prediction" 
                                                detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                                list="Regression" />
                                        </Link>
                                        <Link to="moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                                <Kartu
                                                sumber={require("../../../Aset/1166008798_2.webp")}
                                                judul="Prediction" 
                                                detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                                list="Regression" />
                                        </Link>
                                        <Link to="moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                                <Kartu
                                                sumber={require("../../../Aset/1166008798_2.webp")}
                                                judul="Prediction" 
                                                detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                                list="Regression" />
                                        </Link>
                                        <Link to="moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                                <Kartu
                                                sumber={require("../../../Aset/1166008798_2.webp")}
                                                judul="Prediction" 
                                                detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                                list="Regression" />
                                        </Link>
                                        <Link to="moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                                <Kartu
                                                sumber={require("../../../Aset/1166008798_2.webp")}
                                                judul="Prediction" 
                                                detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                                list="Regression" />
                                        </Link>
                                        <Link to="moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                                <Kartu
                                                sumber={require("../../../Aset/1165953918_2.webp")}
                                                judul="Prediction" 
                                                detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                                list="Regression" />
                                        </Link>
                                        <Link to="moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                                <Kartu
                                                sumber={require("../../../Aset/1166008798_2.webp")}
                                                judul="Prediction" 
                                                detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                                list="Regression" />
                                        </Link>
                                        <Link to="moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                                <Kartu
                                                sumber={require("../../../Aset/1165974181_2.webp")}
                                                judul="Prediction" 
                                                detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                                list="Regression" />
                                        </Link>
                                        <Link to="moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                                <Kartu
                                                sumber={require("../../../Aset/1166008798_2.webp")}
                                                judul="Prediction" 
                                                detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                                list="Regression" />
                                        </Link>
                                </Carousel>
                                </div>
                                </Col>
                                <Col md="auto"></Col>
                                <Col xs lg="2" className="my-4">
                                <h2 className="text-center" style={{color: "white"}}>
                                        Top Movies Ratings <i class="bi bi-star-half"></i>
                                </h2>
                                </Col>
                        </Row>
                        <br></br>
                        <Row className="flex-column-reverse flex-md-row align-items-center" >
                                <Col>
                                <div className="styling-example">
                                <Carousel breakPoints={breaker} enableAutoPlay="true" autoPlaySpeed="6000" transitionMs="750" showArrows={false} pagination={false} initialActiveIndex={1}>
                                        <Link to="moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                                <Kartu
                                                sumber={require("../../../Aset/1166008798_2.webp")}
                                                judul="Prediction" 
                                                detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                                list="Regression" />
                                        </Link>
                                        <Link to="moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                                <Kartu
                                                sumber={require("../../../Aset/1166008798_2.webp")}
                                                judul="Prediction" 
                                                detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                                list="Regression" />
                                        </Link>
                                        <Link to="moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                                <Kartu
                                                sumber={require("../../../Aset/1166008798_2.webp")}
                                                judul="Prediction" 
                                                detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                                list="Regression" />
                                        </Link>
                                        <Link to="moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                                <Kartu
                                                sumber={require("../../../Aset/1166008798_2.webp")}
                                                judul="Prediction" 
                                                detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                                list="Regression" />
                                        </Link>
                                        <Link to="moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                                <Kartu
                                                sumber={require("../../../Aset/1166008798_2.webp")}
                                                judul="Prediction" 
                                                detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                                list="Regression" />
                                        </Link>
                                        <Link to="moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                                <Kartu
                                                sumber={require("../../../Aset/1166008798_2.webp")}
                                                judul="Prediction" 
                                                detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                                list="Regression" />
                                        </Link>
                                        <Link to="moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                                <Kartu
                                                sumber={require("../../../Aset/1165953918_2.webp")}
                                                judul="Prediction" 
                                                detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                                list="Regression" />
                                        </Link>
                                        <Link to="moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                                <Kartu
                                                sumber={require("../../../Aset/1166008798_2.webp")}
                                                judul="Prediction" 
                                                detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                                list="Regression" />
                                        </Link>
                                        <Link to="moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                                <Kartu
                                                sumber={require("../../../Aset/1165974181_2.webp")}
                                                judul="Prediction" 
                                                detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                                list="Regression" />
                                        </Link>
                                        <Link to="moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                                                <Kartu
                                                sumber={require("../../../Aset/1166008798_2.webp")}
                                                judul="Prediction" 
                                                detail="Find out the best algorithm to prediction the data with the highest accuracy"
                                                list="Regression" />
                                        </Link>
                                </Carousel>
                                </div>
                                </Col>
                                <Col md="auto"></Col>
                                <Col xs lg="2" className="my-4">
                                <h2 className="text-center" style={{color: "white"}}>
                                        
                                Top Indonesian Movies
                                        
                                </h2>
                                </Col>
                        </Row>
                        <br></br>
                        </Bounce>
                </div>
                </Container>
            </Fragment>
        </Animasi>
    );
}; 




export default Beranda;