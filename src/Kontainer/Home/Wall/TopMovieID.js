import React from 'react';
import { Link } from 'react-router-dom';
import { GETIDMOVIES } from '../../../Hooks/Querry';
import { useQuery } from '@apollo/client/react';
import {mean, count} from 'mathjs'
//Komponen

import Animasi from '../../../Komponen/Animasi';
import Kartu from '../../../Komponen/Kartu/Kartu';
import { Container, Col, Row, Spinner, Alert } from 'react-bootstrap';
import { Bounce } from 'react-reveal';

const styles = {
    backgroundColor: "transparent",
    backgroundRepeat: "no-repeat",
    border: "none",
    cursor: "pointer",
    overflow: "hidden",
    outline: "none",
};

const center = {
    width: "50px",
    height: "50px",
    position: "absolute",
    top: "50%",
    left: "50%",
    margin: "-25px 0 0 -25px"
}

const IDMov= () => {
   
    const {loading, error,data: dataIndo} = useQuery(GETIDMOVIES,{
        variables: {code:{eq:"ID"}}
    })
    if(loading){
        return (
            <div style={center}>
                <Spinner animation="border" variant="secondary"/>
            </div>
        )
    }
    if(error){
            return(
                    <Alert variant="danger">
                    API not found
                    </Alert>
            )
    }
  
    return(
        <Animasi>
                <div className="text-center" style={{color: "white"}}>
                    <h1>Top Indonesian Movies</h1>
                    <hr style={{color: "#7a4de2"}}></hr>
                </div>

                <Container >
                    <div style={{overflow: 'hidden'}}>
                        <Row justify-content-md-center>
                                {dataIndo?.movies.data?.map((movie)=>(
                                <Col lg={2} xs={6} md={3} className="my-2">
                                    <Bounce bottom>
                                    <div key={movie.id}>
                                        <Link to={`/moviesdetail/${movie.id}`} style={{ textDecoration: 'none', color: 'black' }}>
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
                                    </Bounce>
                                </Col>
                                ))
                                }
                        </Row>

                   
                   
                    </div>

                </Container>
                
        </Animasi>
      
    )
}; 




export default IDMov;