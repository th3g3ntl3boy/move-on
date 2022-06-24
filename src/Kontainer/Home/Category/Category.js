import React, {useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { GETCATEGORYMOV } from '../../../Hooks/Querry';
import { useQuery } from '@apollo/client/react';
//Komponen

import Animasi from '../../../Komponen/Animasi';
import Kartu from '../../../Komponen/Kartu/Kartu';
import { Container, Col, Row, Spinner, Alert } from 'react-bootstrap';
import { Bounce } from 'react-reveal';
import Jello from 'react-reveal/Jello'

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
const link = `https://backend-artikel.herokuapp.com`

const Category= () => {
    const {genre} = useParams()
    const [animate, setAnimate] = useState(false)
    const [disapear, setDisapear] = useState("")
    const {loading, error, data} = useQuery(GETCATEGORYMOV,{
        variables: {code: {eq:genre}, halaman:1}
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
    console.log(data)
    return(
        <Animasi>
                <div className="text-center" style={{color: "white"}}>
                    <h1>{genre}</h1>
                    <hr style={{color: "#7a4de2"}}></hr>
                </div>

                <Container >
                    <div style={{overflow: 'hidden'}}>
                    <Bounce bottom>
                    <Row justify-content-md-center>
                        {data.movies.data?.map((cat)=>(
                            <Col lg={2} xs={6} md={3} className="my-2">
                                <Link to={`/moviesdetail/${cat.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                        <Kartu
                                        sumber={`${link}${cat.attributes.thumb.data?.attributes.url}`}
                                        judul={`${cat.attributes.title.substring(0, 20)}`} 
                                        />
                                </Link>
                            </Col>
                        ))
                        }
                    </Row>
                    {/* <br></br>
                    <div className={`text-center ${disapear}`} >
                        <button style={styles} onClick={()=> {setAnimate(true); setDisapear("d-none")}}>
                            <Jello when={animate}>
                            <p style={{color: "white"}}><em>
                                <i>load more <i class="bi bi-arrow-clockwise"></i>
                                </i></em></p>
                            </Jello> 
                        </button>
                    </div> */}
                    </Bounce>
                    </div>

                </Container>
                
        </Animasi>
      
    )
}; 




export default Category;