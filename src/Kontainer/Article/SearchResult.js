import React, {useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import { CARI_JUDUL} from '../../Hooks/Querry'
import SearchBar from '../../Komponen/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { useLazyQuery } from '@apollo/client';


// stylesheet
import { Container, Row, Col, Spinner, Alert, Form,Badge} from 'react-bootstrap';
import Arrow from '../../Komponen/Arrow/Arrow';
import Animasi from '../../Komponen/Animasi';
import Bounce from 'react-reveal/Bounce';

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
    const [cari,{loading, error, data}] = useLazyQuery(CARI_JUDUL,{
        variables: {judul: {contains: name},
        onCompleted: (data)=>console.log(data)
    }})

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
                Coming soon...
            </Alert>
        )
    }
    
    console.log(data)
    
    return (
        <Animasi>  
            <Container>
                <Row className="align-items-center">
                    <Col md={{ span: 6, offset: 3 }}>
                        <div className="text-center">    
                            <h1>Machine Learning Algorithm</h1>
                            <p><i>"learn something about data"</i></p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <hr></hr>

            
            <Container>
                <Row className="flex-column-reverse flex-md-row">
                    <Col>
                        <Bounce left duration={500}>
                            <div>
                            {data?.algoritmas.data?.map((algoritma) =>(
                                <div key={algoritma.id}>
                                    <h3>{algoritma.attributes.judul}</h3>
                                    <Badge pill bg="light" text="dark">{algoritma.attributes.kategoris.data.attributes.jenis}</Badge>
                                    <Badge pill bg="light" text="dark">{algoritma.attributes.ordo.data.attributes.judul}</Badge>
                                    <FontAwesomeIcon icon={faEye} fade/>
                                    <small>
                                        {` ${algoritma.attributes.views} views`}
                                    </small>
                                    <hr></hr>
                                    <p>{algoritma.attributes.deskripsi.substring(0, 200)}...</p>
                                    <Link to={`/algorithm/article/${algoritma.id}`} style={{ textDecoration: 'none', color: 'black',textAlign: 'left' }}>
                                        <Arrow halaman="Learn More">
                                        </Arrow>
                                    </Link>
                                    <br></br>              
                                </div>
                            ))}
                            </div>
                        </Bounce>
                    </Col>
                    <Col md="auto"></Col>
                    <Col xs lg="4" className= "my-4 ">
                        <SearchBar/>
                        <div key={`inline-radio`} className="mb-3">
                            <Form.Check
                                inline
                                label="Supervised"
                                name="group1"
                                type="radio"
                                id={`inline-radio-1`}
                            />
                            <Form.Check
                                inline
                                label="Unsupervised"
                                name="group1"
                                type="radio"
                                id={`inline-radio-2`}
                            />
                        </div>
                    </Col>
                   
                </Row>
            </Container>
        </Animasi>
    )
}

export default SearchResult