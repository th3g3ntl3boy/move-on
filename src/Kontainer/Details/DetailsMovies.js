import React, {useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col, Spinner, Alert, Button, Table } from 'react-bootstrap';
import Carousel from 'react-elastic-carousel';
import Arrow from '../../Komponen/Arrow/Arrow.js';
import { useQuery, useMutation } from '@apollo/client';
import { MOVIESDETAIL, GETCATEGORYMOV, GETRATINGMOV, VIEWSCOUNT, VIEWHISTORY, DELETEBOOKMARK, ADDBOOKMARK} from '../../Hooks/Querry.js';
import { AuthContext } from '../../Hooks/authContext.js';

// komponen
import Kartu from '../../Komponen/Kartu/Kartu.js';

// stylesheet
import Animasi from '../../Komponen/Animasi';
import './DetailsMovies.css'
import RatingKomen from '../../Komponen/RatingKomen.js';
import Komen from '../../Komponen/Komen.js';
import { Bounce, Zoom } from 'react-reveal';
import Flash from 'react-reveal/Flash';

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
    const {user} = useContext(AuthContext)

    const [details, setDetails] = useState("Show more")
    const [counter, setCounter]= useState(0)


    const [book, setBook] = useState("-plus")
    const [counter1, setCounter1] = useState(0)
    const [rating, setRating] = useState(0)
    
    const [star1, setStar1 ] = useState("")
    const [star2, setStar2 ] = useState("")
    const [star3, setStar3 ] = useState("")
    const [star4, setStar4 ] = useState("")
    const [star5, setStar5 ] = useState("")
    
    const [createWatchHist, {data: dataHist}] = useMutation(VIEWHISTORY, {
        variables: {movid: id, userID: user?.id},
        onCompleted: (dataHist) => {
            console.log(dataHist)
        }
    })

    const {data: dataView} = useQuery(VIEWSCOUNT,{
        variables: {movid: id},
        onCompleted: (dataView) => {
            console.log(dataView)
        }
    }) 

    const {error, loading, data} = useQuery(MOVIESDETAIL,{
        variables: {id : id},
        onCompleted: (data) =>{
            console.log(data);
            createWatchHist()
        }
    })

    const {data : dataCat1} = useQuery(GETCATEGORYMOV,{
        variables: {id: data?.movie.data.attributes.categories.data[0]?.id, halaman:1}
    })

    const {data : dataCat2} = useQuery(GETCATEGORYMOV,{
        variables: {id: data?.movie.data.attributes.categories.data[1]?.id, halaman:1}
    })

    const {data : dataRate} = useQuery(GETRATINGMOV,{
        variables: {id:id},
        onCompleted: (dataRate) => {
            if (dataRate.ratings.data.length>0){
                let total = 0;
                dataRate.ratings.data?.map((bintang)=>{
                    total=bintang.attributes.star+total
                });
                setRating(total/dataRate.ratings.meta.pagination.total);
            }else{
                setRating(0)
            }
        }
    })

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
                            {
                                data1.movie.data.attributes.ytlink?

                                <>
                                <Bounce left duration={2500}>
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
                                </Bounce>
                                </>

                                :

                                <>
                                </>

                            }
                        <Row>
                            <Col xs={9}>
                            <h3>{`${data1.movie.data.attributes.title} (${data1.movie.data.attributes.release_date.substring(0,4)})`}</h3>
                            </Col>
                            <Col xs={3} className="text-end">
                            
                            <button 
                            style={styles}
                            onClick={async ()=>{
                                await setCounter1(counter1+1);
                                counter1 %2===0 ? 
                                setBook("-fill") 
                                :
                                setBook("-plus")
                            }}
                            >
                                <i class={`bi bi-bookmark${book}`} style={{fontSize: "25px"}}></i>
                            </button>
                            </Col>
                        </Row> 
                        
                        <small>
                            <p>
                            <i class="bi bi-eye"></i>  {dataView?.histories.meta.pagination.total} Views
                            </p>
                        </small>
                        <div style={{display: "inline"}}>
                            <i class={`bi bi-star${star1}`}></i>
                            <i class={`bi bi-star${star2}`}></i>
                            <i class={`bi bi-star${star3}`}></i>
                            <i class={`bi bi-star${star4}`}></i>
                            <i class={`bi bi-star${star5}`}></i>
                            <p>{rating.toFixed(1)} (<i class="bi bi-people-fill"></i> {dataRate?.ratings.meta.pagination.total}) </p>
                            
                        </div>           
                        
                        {data1.movie.data.attributes.description.substring(0,147)}

                        {
                            counter%2!==0?

                            <>
                            {data1.movie.data.attributes.description.substring(147,99999)}
                            <br></br>
                            <br></br>
                            <div className="tableRespons">

                            <Row>
                                <Col sm={3} className="my-2 d-none d-sm-block">
                                    <Kartu
                                        sumber={`${data1.movie.data.attributes.linkgambar}`}
                                        judul={`${data1.movie.data.attributes.title.substring(0, 20)}`} 
                                    />
                                </Col>
                                <Col sm={8}>
                                    <Table style={{color: "white"}}>

                                    <tbody>
                                    <tr>
                                        <td>Title </td>
                                        <td>{data1.movie.data.attributes.title}</td>
                                    </tr>
                                    <tr>
                                        <td>Release Date </td>
                                        <td>{data1.movie.data.attributes.release_date}</td>
                                    </tr>
                                    <tr>
                                        <td>Genre </td>
                                        <td>
                                            {data1.movie.data.attributes.categories.data.map((cat)=>(
                                                <Link to={`/category/${cat.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                                    <small>
                                                        <span class="badge rounded-pill text-bg-light">{cat.attributes.category}</span>
                                                    </small> {' '}
                                                </Link> 
                                            ))}
                                        </td>
                                    </tr>
                                    </tbody>
                                    </Table>
                                    
                                </Col>
                               
                            </Row>
                            </div>
                            </>
                            :
                            <>
                            
                            </>
                        }
                      
                        {/* show details */}
                        <small>
                            <button
                            style={styles} 
                            onClick={async ()=>{
                                await setCounter(counter+1);
                                if(counter%2===0){
                                    setDetails("Show less")
                                }
                                else{
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
                        {
                            data1.movie.data.attributes.comments.data.length>0? 
                            <>
                            {
                                
                                data1.movie.data.attributes.comments.data.slice(0).reverse().map((komen)=>(
                                    <Bounce bottom duration={500}>
                                        <div key={komen.id}>
                                            <Komen
                                            user={komen.attributes.users_permissions_user.data.attributes.username}
                                            comment={komen.attributes.comment}
                                            date={komen.attributes.createdAt.substring(11,16)}
                                            like={komen.attributes.likes}
                                            />
                                        </div>
                                    </Bounce>
                                ))
                            }
                            </>
                            :
                            <>
                                <div className="text-center">
                                    <p><em><i>no comment just yet</i></em></p>
                                </div>
                            </>
                        }
                        

                    </Col>
                    <Col md="auto">
                    </Col>
                    <Col xs lg="4" className="my-4">

                        {
                            dataCat2?.category.data?.attributes.movies.data.length>1?

                            <>
                            <Bounce right>
                                <h3 style={{color: "white"}}>
                                    {`More ${dataCat2?.category.data?.attributes.category} Movies`}
                                </h3>
                                <button style={styles}>
                                    <Link to={`/category/${dataCat2?.category.data?.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                        <small>
                                        <span class="badge rounded-pill text-bg-light">Show All</span>
                                        </small>
                                    </Link>
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
                                    initialActiveIndex={0} 
                                    outerSpacing={-30}
                                    >
                                        {dataCat2?.category.data?.attributes.movies.data.filter((cats)=>(cats.id!==id)).map((cat)=>(
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
                            </Bounce>
                            </>

                            :

                            <></>
                        }

                        {
                             dataCat1?.category.data?.attributes.movies.data.length>1?

                            <>
                            <Bounce right>
                                <h3 style={{color: "white"}}>
                                    {`More ${dataCat1?.category.data?.attributes.category} Movies`}
                                </h3>
                                <button style={styles}>
                                    <Link to={`/category/${dataCat1?.category.data?.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                        <small>
                                        <span class="badge rounded-pill text-bg-light">Show All</span>
                                        </small>
                                    </Link>
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
                                    initialActiveIndex={0} 
                                    outerSpacing={-30}
                                    >
                                        {dataCat1?.category.data?.attributes.movies.data.filter((cats)=>(cats.id!==id)).map((cat)=>(
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
                            </Bounce>
                            </>

                            :
                            <></>
                        }
                       
                    </Col>
                </Row>
            </Container>
        </Animasi>
    )
}; 




export default DetailsMovies;