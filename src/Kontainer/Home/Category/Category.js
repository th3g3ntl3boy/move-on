import React, {useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { GETCATEGORYMOV } from '../../../Hooks/Querry';
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

const Category= () => {
    const {id} = useParams()
    const [disapear, setDisapear] =  useState(false)
    const [pageCounter, setPageCounter] = useState(12)

    const {loading, error, data} = useQuery(GETCATEGORYMOV,{
        variables: {id:id, halaman: pageCounter}
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
    console.log(data)
    return(
        <Animasi>
                <div className="text-center" style={{color: "white"}}>
                    <h1>{data?.category.data.attributes.category}</h1>
                    <hr style={{color: "#7a4de2"}}></hr>
                </div>

                <Container >
                    <div style={{overflow: 'hidden'}}>
                        <Row justify-content-md-center>
                                {data?.category.data.attributes.movies.data?.map((cat)=>(
                                <Col lg={2} xs={6} md={3} className="my-2">
                                    <Bounce bottom>
                                    <Link to={`/moviesdetail/${cat.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                            <Kartu
                                            sumber={`${cat.attributes.linkgambar}`}
                                            judul={`${cat.attributes.title.substring(0, 20)}`} 
                                            star={mean(cat.attributes.ratings.data.length>0?

                                                cat.attributes.ratings.data.map((st)=>st.attributes.star)

                                                :

                                                0
                                                
                                                ).toFixed(1)}

                                            view={count(cat.attributes.histories.data.length>0? 
                                                cat.attributes.histories.data?.map((st)=>st.id)
                                                :
                                                0
                                                )
                                            }  
                                            />
                                            
                                    </Link>
                                    </Bounce>
                                </Col>
                                ))
                                }
                        </Row>
                    {
                        data?.category.data.attributes.movies.data.length>11?

                        <>
                        <br></br>
                        <div className={`text-center ${disapear}`} >
                            <button style={styles} onClick={()=> {setPageCounter(pageCounter+12);setDisapear("d-none")}}>
                                <p style={{color: "white"}}><em>
                                    <i>load more <i class="bi bi-arrow-clockwise"></i>
                                </i></em></p>
                            </button>
                        </div>
                        </>

                        :

                        <></>
                    }
                   
                   
                    </div>

                </Container>
                
        </Animasi>
      
    )
}; 




export default Category;