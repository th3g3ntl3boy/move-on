import React from 'react'
import {Container, Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Carousel from 'react-elastic-carousel'
import Kartu from '../../../Komponen/Kartu/Kartu'
import {Flip} from 'react-reveal';

const breaker = [
    {width:1, itemsToShow: 1},
    {width:150, itemsToShow: 2},
    {width:300, itemsToShow: 2, outerSpacing: 80},
    {width:450, itemsToShow: 4},
    {width:600, itemsToShow: 5},
    {width:750, itemsToShow: 6, outerSpacing: 80}
]


const User = () => {
  return (
    <div style={{color: "white", overflow: "hidden"}}>
        <Container>
            <Row>
                <Flip left>
                    <h1 className="text-center">
                        <i class="bi bi-person-circle" style={{ fontSize: 230 }}></i>
                    </h1>
                </Flip>
                <Flip top>
                    <h5 className="text-center">
                        User Name
                    </h5>
                </Flip>
                <br></br>
                <p><em><i>last preview</i></em></p>
                <Carousel breakPoints={breaker} enableAutoPlay="true" autoPlaySpeed="4500" transitionMs="1000" showArrows={false} pagination={false} initialActiveIndex={1} itemsToScroll={2}>
                    <Link to="/moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                            <Kartu
                            sumber={require("../../../Aset/1166008798_2.webp")}
                            judul="Prediction" 
                            detail="Find out the best algorithm to prediction the data with the highest accuracy"
                            list="Regression" />
                    </Link>
                    <Link to="/moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                            <Kartu
                            sumber={require("../../../Aset/1166008798_2.webp")}
                            judul="Prediction" 
                            detail="Find out the best algorithm to prediction the data with the highest accuracy"
                            list="Regression" />
                    </Link>
                    <Link to="/moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                            <Kartu
                            sumber={require("../../../Aset/1166008798_2.webp")}
                            judul="Prediction" 
                            detail="Find out the best algorithm to prediction the data with the highest accuracy"
                            list="Regression" />
                    </Link>
                    <Link to="/moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                            <Kartu
                            sumber={require("../../../Aset/1166008798_2.webp")}
                            judul="Prediction" 
                            detail="Find out the best algorithm to prediction the data with the highest accuracy"
                            list="Regression" />
                    </Link>
                    <Link to="/moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                            <Kartu
                            sumber={require("../../../Aset/1166008798_2.webp")}
                            judul="Prediction" 
                            detail="Find out the best algorithm to prediction the data with the highest accuracy"
                            list="Regression" />
                    </Link>
                    <Link to="/moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                            <Kartu
                            sumber={require("../../../Aset/1166008798_2.webp")}
                            judul="Prediction" 
                            detail="Find out the best algorithm to prediction the data with the highest accuracy"
                            list="Regression" />
                    </Link>
                    <Link to="/moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                            <Kartu
                            sumber={require("../../../Aset/1165953918_2.webp")}
                            judul="Prediction" 
                            detail="Find out the best algorithm to prediction the data with the highest accuracy"
                            list="Regression" />
                    </Link>
                    <Link to="/moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                            <Kartu
                            sumber={require("../../../Aset/1166008798_2.webp")}
                            judul="Prediction" 
                            detail="Find out the best algorithm to prediction the data with the highest accuracy"
                            list="Regression" />
                    </Link>
                    <Link to="/moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                            <Kartu
                            sumber={require("../../../Aset/1165974181_2.webp")}
                            judul="Prediction" 
                            detail="Find out the best algorithm to prediction the data with the highest accuracy"
                            list="Regression" />
                    </Link>
                    <Link to="/moviesdetail" style={{ textDecoration: 'none', color: 'black' }}>
                            <Kartu
                            sumber={require("../../../Aset/1166008798_2.webp")}
                            judul="Prediction" 
                            detail="Find out the best algorithm to prediction the data with the highest accuracy"
                            list="Regression" />
                    </Link>
            </Carousel>
            </Row>
        </Container>
        <h1>
            
        </h1>
    </div>
  )
}

export default User