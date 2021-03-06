import React, {useState} from 'react'
import { GETIDENTITY } from '../../../Hooks/Querry'
import { useQuery } from '@apollo/client'
import {mean, count} from 'mathjs'


import {Container, Row, Spinner, Alert, Tabs, Tab} from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import Carousel from 'react-elastic-carousel'
import Kartu from '../../../Komponen/Kartu/Kartu'
import {Bounce, Flip} from 'react-reveal';

const breaker = [
        {width:1, itemsToShow: 1},
        {width:150, itemsToShow: 2},
        {width:300, itemsToShow: 2, outerSpacing: -30},
        {width:450, itemsToShow: 3, outerSpacing: -30},
        {width:600, itemsToShow: 5, showArrows: true, outerSpacing: -10},
        {width:750, itemsToShow: 6, showArrows: true, outerSpacing: -20 }
]

const center = {
width: "50px",
height: "50px",
position: "absolute",
top: "50%",
left: "50%",
margin: "-25px 0 0 -25px"
}

const User = () => {
        const {id} = useParams()

        const [key, setKey] = useState('history');
        const {error, loading, data: identity} = useQuery(GETIDENTITY,{
                variables: {id:id},
                onCompleted: (identity) => console.log(identity)
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
        const hist = identity?.usersPermissionsUser.data.attributes.histories.data.slice(0).reverse()
        const history = [...new Map(hist.map(mov=>[
                mov.attributes.movie.data.attributes.title, mov
        ]))]
        console.log(hist)
        console.log(history)
        return (
        <div style={{color: "white", overflow: "hidden"}}>
                <Container>
                <Row>
                        <Flip left>
                        <h1 className="text-center">
                                <i class="bi bi-person-circle" style={{ fontSize: 150 }}></i>
                        </h1>
                        </Flip>
                        <Flip top>
                        <div className="text-center">
                        <h5 >
                                {identity?.usersPermissionsUser.data.attributes.username}
                        </h5>
                        <p>
                                {identity?.usersPermissionsUser.data.attributes.gender==="Man"? <>He/His</> : <>She/Her</>}
                        </p>
                        </div>
                        </Flip>
                        <br></br>

                        <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                        >
                                <Tab eventKey="history" title="History">
                                {       identity?.usersPermissionsUser.data.attributes.histories.data.length>0?

                                        <>
                                        {/* <Bounce left>
                                                <Carousel breakPoints={breaker} transitionMs="1000" showArrows={false} pagination={false} initialActiveIndex={0} itemsToScroll={2}>
                                                        { 
                                                        identity?.usersPermissionsUser.data.attributes.histories.data?.slice(0).reverse().map((riwayat)=>(
                                                                        <Link to={`/moviesdetail/${riwayat.attributes.movie.data.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                                                        <Kartu
                                                                        sumber={`${riwayat.attributes.movie.data.attributes.linkgambar}`}
                                                                        judul={`${riwayat.attributes.movie.data.attributes.title.substring(0, 20)}`}
                                                                        /> 
                                                                        </Link>
                                                                        
                                                                ))
                                                        }
                                                </Carousel>
                                        </Bounce> */}
                                        <Bounce left>
                                                <Carousel breakPoints={breaker} transitionMs="1000" showArrows={false} pagination={false} initialActiveIndex={0} itemsToScroll={2} showEmptySlots>
                                                        { 
                                                        history.map((riwayat)=>(
                                                                        <Link to={`/moviesdetail/${riwayat[1].attributes.movie.data.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                                                        <Kartu
                                                                        sumber={`${riwayat[1].attributes.movie.data.attributes.linkgambar}`}
                                                                        judul={`${riwayat[1].attributes.movie.data.attributes.title.substring(0, 20)}`}
                                                                        star={mean(riwayat[1].attributes.movie.data.attributes.ratings.data.length>0?
                                                                                riwayat[1].attributes.movie.data.attributes.ratings.data.map((st)=>st.attributes.star)
                                                                                :
                                                                                0
                                                                                ).toFixed(1)} 
                        
                                                                        view={count(riwayat[1].attributes.movie.data.attributes.histories.data.length>0? 
                                                                                riwayat[1].attributes.movie.data.attributes.histories.data?.map((st)=>st.id)
                                                                                :
                                                                                0
                                                                                )}  
                                                                         
                                                                        /> 
                                                                        </Link>
                                                                        
                                                                ))
                                                        }
                                                </Carousel>
                                        </Bounce>
                                        </>

                                        :

                                        <>
                                                                                
                                        You haven't watched movie yet
                                        </>
                                }       
                       
                                </Tab>
                                <Tab eventKey="bookmarks" title="Bookmarks">
                                        {       
                                        identity?.usersPermissionsUser.data.attributes.bookmarks.data.length>0?

                                        <>
                                        <Bounce left>
                                                <Carousel breakPoints={breaker} transitionMs="1000" showArrows={false} pagination={false} initialActiveIndex={0} itemsToScroll={2} showEmptySlots>
                                                        {
                                                        identity?.usersPermissionsUser.data.attributes.bookmarks.data?.filter((mov)=>(mov.id!==id)).slice(0).reverse().map((riwayat)=>(
                                                                        <Link to={`/moviesdetail/${riwayat.attributes.movie.data.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                                                        <Kartu
                                                                        sumber={`${riwayat.attributes.movie.data.attributes.linkgambar}`}
                                                                        judul={`${riwayat.attributes.movie.data.attributes.title.substring(0, 20)}`}
                                                                        star={mean(riwayat.attributes.movie.data.attributes.ratings.data.length>0?
                                                                                riwayat.attributes.movie.data.attributes.ratings.data.map((st)=>st.attributes.star)
                                                                                :
                                                                                0
                                                                                ).toFixed(1)} 
                        
                                                                        view={count(riwayat.attributes.movie.data.attributes.histories.data.length>0? 
                                                                                riwayat.attributes.movie.data.attributes.histories.data?.map((st)=>st.id)
                                                                                :
                                                                                0
                                                                                )}  
                                                                        /> 
                                                                        </Link>
                                                                        
                                                                ))
                                                        }
                                                </Carousel>
                                        </Bounce>
                                        </>

                                        :

                                        <>
                                        <p>
                                        You haven't booking any movie just yet
                                        </p>                
                                        </>
                                }       

                                </Tab>
                                <Tab eventKey="rating" title="Ratings">
                                         {       identity?.usersPermissionsUser.data.attributes.ratings.data.length>0?

                                        <>
                                        <Bounce left>
                                                <Carousel breakPoints={breaker} transitionMs="1000" showArrows={false} pagination={false} initialActiveIndex={0} itemsToScroll={2} showEmptySlots>
                                                        { 
                                                        identity?.usersPermissionsUser.data.attributes.ratings.data?.slice(0).reverse().map((riwayat)=>(
                                                                        <Link to={`/moviesdetail/${riwayat.attributes.movie.data.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                                                        <Kartu
                                                                        sumber={`${riwayat.attributes.movie.data.attributes.linkgambar}`}
                                                                        judul={`${riwayat.attributes.movie.data.attributes.title.substring(0, 20)}`}
                                                                        star={mean(riwayat.attributes.movie.data.attributes.ratings.data.length>0?
                                                                                riwayat.attributes.movie.data.attributes.ratings.data.map((st)=>st.attributes.star)
                                                                                :
                                                                                0
                                                                                ).toFixed(1)} 
                        
                                                                        view={count(riwayat.attributes.movie.data.attributes.histories.data.length>0? 
                                                                                riwayat.attributes.movie.data.attributes.histories.data?.map((st)=>st.id)
                                                                                :
                                                                                0
                                                                                )}  
                                                                        /> 
                                                                        </Link>
                                                                        
                                                                ))
                                                        }
                                                </Carousel>
                                        </Bounce>
                                        
                                        </>

                                        :

                                        <>
                                                                                
                                        You haven't given any movie rating just yet
                                        </>
                                }       
                                </Tab>
                        </Tabs>
                       
                </Row>
                </Container>
                <h1>
                
                </h1>
        </div>
        )
}

export default User