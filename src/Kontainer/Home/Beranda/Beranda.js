// library
import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import { TOPMOVIES, GETIDMOVIES } from '../../../Hooks/Querry.js';
import {useQuery } from '@apollo/client';

// komponen
import Kartu from '../../../Komponen/Kartu/Kartu.js';

// stylesheet
import './Beranda.css'
import Bounce from 'react-reveal/Bounce';
import { Container, Row, Col, Spinner, Alert} from 'react-bootstrap';
import Header from '../../../Komponen/Header.js';
import Animasi from '../../../Komponen/Animasi.js';
import {mean, count} from 'mathjs';



const breaker = [
    {width:1, itemsToShow: 1},
    {width:150, itemsToShow: 2},
    {width:300, itemsToShow: 2, outerSpacing: -30},
    {width:450, itemsToShow: 3, outerSpacing: -30},
    {width:600, itemsToShow: 5, showArrows: true, outerSpacing: -10 },
    {width:750, itemsToShow: 5, showArrows: true, outerSpacing: -10 }
]

const styles = {
        backgroundColor: "transparent",
        backgroundRepeat: "no-repeat",
        border: "none",
        cursor: "pointer",
        overflow: "hidden",
        outline: "none",
        color: "white"
};
const center = {
        width: "50px",
        height: "50px",
        position: "absolute",
        top: "50%",
        left: "50%",
        margin: "-25px 0 0 -25px"
}

const link = `https://backend-artikel.herokuapp.com`

const Beranda = () => {
        const ID = "ID"
        const {error, loading, data} = useQuery(TOPMOVIES)
        
        const {data: dataIndo}= useQuery(GETIDMOVIES,{
                variables: {code:{eq:ID}}
        })
        if(loading){
                return (
                    <Spinner animation="border" variant="secondary" style={center}/>
                )
            }
        if(error){
                return(
                        <Alert variant="danger">
                        API not found
                        </Alert>
                )
        }
        const data1 = JSON.parse(JSON.stringify(data))
      
        console.log(data1)
        console.log(dataIndo)
        return(
                <Animasi>
                <Fragment>
                        <Header></Header>
                        <Container fluid="sm">
                                <div style={{overflow: 'hidden'}}>
                                
                                {
                                        data1?

                                        <>
                                        <Bounce right>
                                        <Row className="flex-column-reverse flex-md-row align-items-center">
                                                <Col>
                                                <div className="text-end">
                                                <Link to='/TopMoviesRating' style={{ textDecoration: 'none', color: 'black' }}>
                                                        <button style={styles}>
                                                                <small>
                                                                <span class="badge rounded-pill text-bg-light">Show All</span>
                                                                </small>
                                                        </button>
                                                </Link>
                                                </div>

                                                <div className="styling-example"
                                                >
                                                
                                                <Carousel 
                                                breakPoints={breaker} 
                                                enableAutoPlay="true" 
                                                autoPlaySpeed="4500" 
                                                transitionMs="1000" 
                                                showArrows={false} 
                                                pagination={false} 
                                                initialActiveIndex={0} 
                                                itemsToScroll={2}
                                                focusOnSelect={true}
                                                >
                                                {data1?.movies.data?.map((movie)=>(
                                                        <div key={movie.id}>
                                                                <Link to={`moviesdetail/${movie.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                                                        
                                                                        <Kartu
                                                                        sumber={`${movie.attributes.linkgambar}`}
                                                                        judul={`${movie.attributes.title.substring(0, 20)}`}
                                                                        star={mean(movie.attributes.ratings.data.map((st)=>st.attributes.star)).toFixed(1)}
                                                                        view={count(movie.attributes.histories.data.length>0? 
                                                                                movie.attributes.histories.data.map((st)=>st.id)
                                                                                :
                                                                                0
                                                                                )
                                                                        }  
                                                                        />
                                                                </Link>
                                                        </div>

                                                ))
                                                }
                                                        
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
                                        </Bounce>
                                        </>

                                        :

                                        <></>
                                }

                                {
                                        dataIndo?
                                        <>
                                        <Bounce right>

                                                <Row className="flex-column-reverse flex-md-row align-items-center" >   
                                                        <Col>
                                                        <div className="text-end">
                                                        <Link to='/TopIndonesianMovies' style={{ textDecoration: 'none', color: 'black' }}>
                                                        <button style={styles}>
                                                                <small>
                                                                <span class="badge rounded-pill text-bg-light">Show All</span>
                                                                </small>
                                                        </button>
                                                        </Link>
                                                        </div>

                                                        <div className="styling-example">
                                                        <Carousel 
                                                        breakPoints={breaker} 
                                                        enableAutoPlay="true" 
                                                        autoPlaySpeed="6000" 
                                                        transitionMs="750" 
                                                        showArrows={false} 
                                                        pagination={false} 
                                                        initialActiveIndex={0}
                                                        itemsToScroll={2}
                                                        focusOnSelect={true}  
                                                        >
                                                                {dataIndo?.movies.data?.map((movie)=>(
                                                                <div key={movie.id}>
                                                                        <Link to={`moviesdetail/${movie.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                                                                <Kartu
                                                                                sumber={`${movie.attributes.linkgambar}`}
                                                                                judul={`${movie.attributes.title.substring(0, 20)}`}
                                                                                star={mean(movie.attributes.ratings.data.map((st)=>st.attributes.star)).toFixed(1)}
                                                                                view={count(movie.attributes.histories.data.length>0? 
                                                                                        movie.attributes.histories.data?.map((st)=>st.id)
                                                                                        :
                                                                                        0
                                                                                        )
                                                                                } 
                                                                                />
                                                                        </Link>
                                                                </div>

                                                        ))
                                                        }
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
                                        </>

                                        :

                                        <>
                                        
                                        </>
                                }
                                
                                
                        </div>
                        </Container>
                </Fragment>
                </Animasi>
        );
}; 




export default Beranda;