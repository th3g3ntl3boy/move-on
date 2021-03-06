import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import { SEARCHMOV} from '../../Hooks/Querry'
import { useLazyQuery } from '@apollo/client';
import {mean, count} from 'mathjs'

// stylesheet
import { Container, Row, Col, Spinner, Alert, Pagination} from 'react-bootstrap';
import Animasi from '../../Komponen/Animasi';
import Bounce from 'react-reveal/Bounce';
import Kartu from '../../Komponen/Kartu/Kartu';




const link = `https://backend-artikel.herokuapp.com`

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


const  SearchResult = () => {
    const {name} = useParams()

    const [pageCounter, setPageCounter] = useState(1)


    const [cari,{loading, error, data}] = useLazyQuery(SEARCHMOV,{
        variables: {search: {containsi: name}, halaman: pageCounter},
        onCompleted: (data)=>console.log(data)
    })

    useEffect(() => {
        cari()
    }, []);

    if(loading){
        return (
            <Spinner animation="border" variant="secondary" style={center}/>
        )
    }

    if(error){
        return(
            <Alert variant="danger">
                Fail Connection
            </Alert>
        )
    }
    console.log(data)

    let items = [];
    for (let number = 1; number <= data?.movies.meta.pagination.pageCount; number++) {
        items.push(
                <Pagination.Item key={number} active={number===pageCounter} onClick={()=>setPageCounter(number)}>
                    {number}
                </Pagination.Item>
            
        );
    }
    
    return (
        <Animasi>
                <div className="text-center" style={{color: "white"}}>
                    <h1>Search Results</h1>
                    <hr style={{color: "#7a4de2"}}></hr>
                </div>

                <Container >
                    <div className="text-start">
                        <h4 style={{color: "white"}}>
                            {`There are ${data?.movies.meta.pagination.total} result for `}"<i>{name}</i>"
                        </h4>
                    </div>
                    <div style={{overflow: 'hidden'}}>
                    <Row justify-content-md-center>
                        {data?.movies.data?.map((cat)=>(
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
                        data?.movies.meta.pagination.pageCount>1?

                        <>
                            <br></br>
                            <Pagination className="justify-content-center">{items}</Pagination>
                        </>

                        // <>
                        // <br></br>
                        // <div className={`text-center`} >
                        //     <button style={styles} onClick={()=> {setPageCounter(pageCounter+12)}}>
                        //         <p style={{color: "white"}}><em>
                        //             <i>load more <i class="bi bi-arrow-clockwise"></i>
                        //         </i></em></p>
                        //     </button>
                        // </div>
                        // </>

                        :

                        <></>
                    }
                    
                    </div>

                </Container>
        </Animasi>
    )
}

export default SearchResult