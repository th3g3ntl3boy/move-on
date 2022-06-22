import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';
import Carousel from 'react-elastic-carousel';
import Arrow from '../../Komponen/Arrow/Arrow.js';
import { gql, useQuery } from '@apollo/client';

// komponen
import Kartu from '../../Komponen/Kartu/Kartu.js';

// stylesheet
import Animasi from '../../Komponen/Animasi';
import './DetailsMovies.css'
import RatingKomen from '../../Komponen/RatingKomen.js';

const TES = gql`
query{
  films{
    data{
      id
    }
  }
}
`

const styles = {
    backgroundColor: "transparent",
    backgroundRepeat: "no-repeat",
    border: "none",
    cursor: "pointer",
    overflow: "hidden",
    outline: "none",
    color: "white"
};

const breaker = [
    {width:1, itemsToShow: 1},
    {width:150, itemsToShow: 2, verticalMode: false},
    {width:300, itemsToShow: 2, verticalMode: false},
    {width:450, itemsToShow: 2, verticalMode: false},
    {width:600, itemsToShow: 5},
    {width:750, itemsToShow: 6}
]

const DetailsMovies= () => {
    const [show, setShow] = useState("d-none")
    const [details, setDetails] = useState("Show more")
    const [counter, setCounter]= useState(0)
    
    const {error, loading, data} = useQuery(TES)

    console.log(data)
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
                                src={`https://www.youtube.com/embed/OoYE9blsbvA`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                            />
                        </div>
                        <h3>Titibo-Tibo - Moira Dela Torre</h3>
                        <button style={styles}>
                            <span class="badge rounded-pill text-bg-light">romance</span>
                        </button>
                        
                        <br></br>
                        <div style={{display: "inline"}}>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star"></i>
                            <p>4.3 (<i class="bi bi-people-fill"></i> 18)</p>
                        </div>           
                       
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        <p className={`${show}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>

                        {/* show details */}
                        <small>
                            <button
                            style={styles} 
                            onClick={async ()=>{
                                await setCounter(counter+1);
                                if(counter%2===0){
                                    setShow("d-block")
                                    setDetails("Show less")
                                }
                                else{
                                    setShow("d-none")
                                    setDetails("Show more")
                                }
                                }}
                                >
                                <Arrow halaman={details}/>
                            </button>
                        </small>

                        <br></br>
                        <br></br>
                        
                        <RatingKomen />

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
                            <Carousel breakPoints={breaker} 
                            enableAutoPlay="true" 
                            autoPlaySpeed="4500" 
                            transitionMs="1000" 
                            showArrows={false} 
                            pagination={false}
                            itemPadding={[10]}
                            verticalMode={true} 
                            itemsToScroll={2}  
                            initialActiveIndex={1} 
                            outerSpacing={80}
                            >
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
                            <Carousel 
                            breakPoints={breaker} 
                            enableAutoPlay="true" 
                            autoPlaySpeed="5000" 
                            transitionMs="1000" 
                            showArrows={false} 
                            pagination={false}
                            itemPadding={[10]}
                            itemsToScroll={2}  
                            verticalMode={true}  
                            initialActiveIndex={1} 
                            outerSpacing={80}
                            >
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
                    </Col>
                </Row>
            </Container>
        </Animasi>
    )
}; 




export default DetailsMovies;