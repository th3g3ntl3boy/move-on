import React, {useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col, Spinner, Alert, Button, } from 'react-bootstrap';
import Carousel from 'react-elastic-carousel';
import Arrow from '../../Komponen/Arrow/Arrow.js';
import { useQuery, useMutation } from '@apollo/client';
import { MOVIESDETAIL, GETCATEGORYMOV, GETRATINGMOV, UPDATEVIEWS } from '../../Hooks/Querry.js';

// komponen
import Kartu from '../../Komponen/Kartu/Kartu.js';

// stylesheet
import Animasi from '../../Komponen/Animasi';
import './DetailsMovies.css'
import RatingKomen from '../../Komponen/RatingKomen.js';

const center = {
    width: "50px",
    height: "50px",
    position: "absolute",
    top: "50%",
    left: "50%",
    margin: "-25px 0 0 -25px"
}

const link = `https://backend-artikel.herokuapp.com`
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
    
    const {id} = useParams()
    const [show, setShow] = useState("d-none")
    const [details, setDetails] = useState("Show more")
    const [counter, setCounter]= useState(0)
    const [view, setView] = useState(0)


    const [rating, setRating] = useState(0)
    
    const [star1, setStar1 ] = useState("")
    const [star2, setStar2 ] = useState("")
    const [star3, setStar3 ] = useState("")
    const [star4, setStar4 ] = useState("")
    const [star5, setStar5 ] = useState("")
    

    const {error, loading, data} = useQuery(MOVIESDETAIL,{
        variables: {id : id},
        onCompleted: (data) =>{
            const data3 = JSON.parse(JSON.stringify(data));
            console.log(data3.movie.data.attributes.view);
            setView(data3.movie.data.attributes.view+1);
            console.log(view)
        }
    })

    const {data : dataCat} = useQuery(GETCATEGORYMOV,{
        variables: {code: {eq:data?.movie.data.attributes.category}, halaman:1}
    })

    const {data : dataRate} = useQuery(GETRATINGMOV,{
        variables: {id:id},
        onCompleted: (dataRate) => {
            let total = 0;
            dataRate.ratings.data.map((bintang)=>{
                total=bintang.attributes.star+total
            });
            setRating(total/dataRate.ratings.meta.pagination.total);
        }
    })

    const [updateViewss,{data: dataView}] = useMutation(UPDATEVIEWS,{
        variables: {id:id, watch: view},
        onCompleted: (dataView) =>{
            console.log(dataView)
        }
    })

    console.log(dataCat)
    console.log(dataRate)

    function handleStar(){
        if(rating<1){
            setStar1("");
            setStar2("");
            setStar3("");
            setStar4("");
            setStar5("");
        }if(rating>=1 && rating <2){
            setStar1("-fill");
            setStar2("");
            setStar3("");
            setStar4("");
            setStar5("");
        }if(rating>=2 && rating<3){
            setStar1("-fill");
            setStar2("-fill");
            setStar3("");
            setStar4("");
            setStar5("");
        }if(rating>=3 && rating<4){
            setStar1("-fill");
            setStar2("-fill");
            setStar3("-fill");
            setStar4("");
            setStar5("");
        }if(rating>=4 && rating<5){
            setStar1("-fill");
            setStar2("-fill");
            setStar3("-fill");
            setStar4("-fill");
            setStar5("");
        }if(rating==5){
            setStar1("-fill");
            setStar2("-fill");
            setStar3("-fill");
            setStar4("-fill");
            setStar5("-fill");
        }
    }

    useEffect(()=>{
        updateViewss()
        handleStar();
        console.log(rating)
    }, [rating])


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
                                src={`https://www.youtube.com/embed/${data1.movie.data.attributes.ytlink}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                            />                          
                        </div>
                        <h3>{`${data1.movie.data.attributes.title} (${data1.movie.data.attributes.release_date.substring(0,4)})`}</h3>
                       
                        <div style={{display: "inline"}}>
                            <i class={`bi bi-star${star1}`}></i>
                            <i class={`bi bi-star${star2}`}></i>
                            <i class={`bi bi-star${star3}`}></i>
                            <i class={`bi bi-star${star4}`}></i>
                            <i class={`bi bi-star${star5}`}></i>
                            <p>{rating} (<i class="bi bi-people-fill"></i> {dataRate?.ratings.meta.pagination.total})</p>
                        </div>           
                       
                        {data1.movie.data.attributes.description.substring(0,147)}
                        <p className={`${show}`}>
                        {data1.movie.data.attributes.description.substring(147,99999)}
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
                        <button style={styles}>
                            <small>
                            <span class="badge rounded-pill text-bg-light">Show All</span>
                            </small>
                        </button>
                        <div className="text-end">
                        
                        </div>
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
                                        sumber={"https://i.postimg.cc/vHJS2vkX/220px-Habibie-Ainun-3-poster.jpg"}
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
                            {`More ${data1?.movie.data?.attributes.category} Movies`}
                        </h3>
                        <button style={styles}>
                            <small>
                            <span class="badge rounded-pill text-bg-light">Show All</span>
                            </small>
                        </button>
                        <div className="styling-example">
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
                                {dataCat?.movies.data?.filter((cats)=>(cats.id!==id)).map((cat)=>(
                                    <Link to={`/moviesdetail/${cat.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                            <Kartu
                                            sumber={`${cat.attributes.linkgambar}`}
                                            judul={`${cat.attributes.title.substring(0, 20)}`} 
                                            />
                                    </Link>
                                    ))
                                }
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Animasi>
    )
}; 




export default DetailsMovies;