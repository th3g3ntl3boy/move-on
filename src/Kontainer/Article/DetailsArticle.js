import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
// import GetArticleDetails from '../../Hooks/GetArticleDetails';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { ARTIKEL, UPDATEVIEWS } from '../../Hooks/Querry';

// stylesheet
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye} from '@fortawesome/free-regular-svg-icons';
import { Container, Row, Col, Spinner, Alert, Form,  Badge, Figure, FormControl, Button} from 'react-bootstrap';
import Animasi from '../../Komponen/Animasi';
import SearchBar from '../../Komponen/SearchBar';
import KomentarLike from '../../Komponen/Log/KomentarLike';
import Komen from '../../Komponen/Komen';
import { useQuery, useMutation } from '@apollo/client';
import { Bounce, Fade } from 'react-reveal';


const center = {
    width: "50px",
    height: "50px",
    position: "absolute",
    top: "50%",
    left: "50%",
    margin: "-25px 0 0 -25px"
}

const styles = {
    backgroundColor: "transparent",
    backgroundRepeat: "no-repeat",
    border: "none",
    cursor: "pointer",
    overflow: "hidden",
    outline: "none",
};

const link = "http://localhost:1337"

const DetailsArticle = () => {
    const {id} = useParams()
    const {loading, error, data} = useQuery(ARTIKEL,{
        variables: {id: id},
    })

    const [updateView] = useMutation(UPDATEVIEWS,{
        variables: {id: id, views: 1},
        onCompleted: (data)=>console.log(data)
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
                    {/*artikel */}
                    <Col>
                        <div key={data.algoritma.data.id}>
                            <h3>{data.algoritma.data.attributes.judul}</h3>
                            <Badge pill bg="light" text="dark">{data.algoritma.data.attributes.kategoris.data.attributes.jenis}</Badge>
                            <Badge pill bg="light" text="dark">{data.algoritma.data.attributes.ordo.data.attributes.judul}</Badge>
                            <FontAwesomeIcon icon={faEye} fade/>
                                <small>
                                    {` ${data.algoritma.data.attributes.views} views`}
                                </small>
                            <hr></hr>

                            <Fade duration={1000}>
                                {
                                data.algoritma.data.attributes.ilustrasi.data[0]?.attributes.url && 
                                <Figure>
                                    <Figure.Image
                                        width={640}
                                        height={480}
                                        alt=""
                                        src={`${link}${data.algoritma.data.attributes.ilustrasi.data[0].attributes.url}`}
                                    />
                                    <Figure.Caption className="text-center">
                                        {`${data.algoritma.data.attributes.judul} illustration`}
                                    </Figure.Caption>
                                </Figure>
                                }
                            </Fade>
        
                            <ReactMarkdown>{data.algoritma.data.attributes.deskripsi}</ReactMarkdown>
                            <br></br>              
                        </div>
                        {/* komponen komentar dan like */}
                        <KomentarLike />
                        <br></br>

                        {/* menampilkan komentar yang sudah ada */}
                        <div style={{overflow: 'hidden'}}>

                        <Bounce bottom duration={500}>
                            {
                            data.algoritma.data.attributes.logs.data?.slice(0).reverse().map((komen) =>(
                                <div key={komen.id}>
                                    <Komen comment={komen.attributes.komentar} tanggal={komen.attributes.createdAt} />     
                                </div>
                            ))
                            }     
                        </Bounce>
                        </div>

                        {/* end artikel */}
                    </Col>
                    <Col md="auto"></Col>
                    <Col xs lg="4" className="my-4">
                        <SearchBar />
                        <br></br>
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

export default DetailsArticle;