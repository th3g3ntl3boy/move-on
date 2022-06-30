import React, {useState, useEffect, useContext} from 'react'
import { AuthContext } from '../Hooks/authContext';
import { CREATERATING, GETRATINGMOV, MOVIESDETAIL, CREATECOMMENT, GETUSERRATING, UPDATESTAR, GETIDENTITY} from '../Hooks/Querry';

import {Form, FormControl, Button, Toast, ToastContainer} from 'react-bootstrap'

import { useMutation, useQuery } from '@apollo/client/react';
import { useParams } from 'react-router';
import { Fade } from 'react-reveal';


const styles = {
    backgroundColor: "transparent",
    backgroundRepeat: "no-repeat",
    border: "none",
    cursor: "pointer",
    overflow: "hidden",
    outline: "none",
    color: "white"
};



const RatingKomen = () => {
    const {id: movId} = useParams() 
    const {user} = useContext(AuthContext)

    const [showUpdate, setShowUpdate] = useState(false);
    const [showCreate, setShowCreate] = useState(false);

    const [rating, setRating] = useState(0)
    const [star1, setStar1 ] = useState("")
    const [star2, setStar2 ] = useState("")
    const [star3, setStar3 ] = useState("")
    const [star4, setStar4 ] = useState("")
    const [star5, setStar5 ] = useState("")

    const [hide, setHide] = useState("d-none")

    const [komentar, setKomentar] = useState("")

   

    const {data : userRating} = useQuery(GETUSERRATING,{
        variables: {userid : user?.id, movid: movId},
        onCompleted: (userRating) => {
            console.log(userRating);
            setRating(userRating.usersPermissionsUser.data?.attributes.ratings.data[0]?.attributes.star)
        }
    })

    const [updateRating, {data: hasUpdate}] = useMutation(UPDATESTAR,{
        variables: {rateID: userRating?.usersPermissionsUser.data?.attributes.ratings.data[0]?.id, starUpdate: rating },
        onCompleted: ()=>{ setShowUpdate(true)},
        refetchQueries :[
            {
                query: GETRATINGMOV
            }, 'getRatingsMov'
        ]
    })
    
    const [createRate, {error:errorRating, loading, data}] = useMutation(CREATERATING,{
        variables: {bintang: rating, userId: user?.id, movieId: movId},
        onCompleted: ()=>{setShowCreate(true)},
        refetchQueries :[
            {
                query: GETRATINGMOV
            }, 'getRatingsMov',

            {
                query: GETUSERRATING
            }, 'userRating',
            {
                query: GETIDENTITY
            }, 'getUser'
        ]
    })

    const [createComment, {error: errorComment, data: commentid}] = useMutation(CREATECOMMENT, {
        variables: {movid: movId, userid: user?.id, komen: komentar},
        onCompleted: (commentid) => {
            console.log(commentid)
        },
        refetchQueries: [
            {
                query: MOVIESDETAIL
            }, 'getMovies'
        ]
    })

    function handleStar(){
        if(rating===1){
            setStar1("-fill");
            setStar2("");
            setStar3("");
            setStar4("");
            setStar5("");
        }if(rating===2){
            setStar1("-fill");
            setStar2("-fill");
            setStar3("");
            setStar4("");
            setStar5("");
        }if(rating===3){
            setStar1("-fill");
            setStar2("-fill");
            setStar3("-fill");
            setStar4("");
            setStar5("");
        }if(rating===4){
            setStar1("-fill");
            setStar2("-fill");
            setStar3("-fill");
            setStar4("-fill");
            setStar5("");
        }if(rating===5){
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

    return (
        <div>
                <>
                        <ToastContainer position="bottom-end" containerPosition='fixed'>
                            <Toast bg="dark" delay={4000} onClose={() => setShowUpdate(false)} show={showUpdate} autohide animation>
                                <Toast.Header>
                                    <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded me-2"
                                    alt=""
                                    />
                                    <strong className="me-auto">Update Rating Notification</strong>
                                </Toast.Header>
                                <Toast.Body>
                                    Your Review has been Updated !
                                </Toast.Body>
                            </Toast>
                        </ToastContainer>

                   
                        <ToastContainer position='bottom-end' containerPosition='fixed'>
                            <Toast bg="dark" delay={4000} onClose={() => setShowCreate(false)} show={showCreate} autohide>
                                <Toast.Header>
                                    <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded me-2"
                                    alt=""
                                    />
                                    <strong className="me-auto">Create Rating Notification</strong>
                                </Toast.Header>
                                <Toast.Body>
                                    Thank you for your feedback !
                                </Toast.Body>
                            </Toast>
                        </ToastContainer>
                    
                </>
                {
                    userRating?.usersPermissionsUser.data?.attributes.ratings.data?.length>0?

                    <>
                    <div className="text-center">
                        <p><em>Your last rating</em></p>
                        <button 
                        style={styles}
                        onClick={()=>{
                            handleStar(setRating(1));
                            setHide("d-block")
                        }}
                        >
                            <i class={`bi bi-star${star1}`}></i>
                        </button>

                        <button 
                        style={styles}
                        onClick={()=>{
                            handleStar(setRating(2));
                            setHide("d-block")
                        }}
                        >
                            <i class={`bi bi-star${star2}`}></i>
                        </button>

                        <button 
                        style={styles}
                        onClick={()=>{
                            handleStar(setRating(3));
                            setHide("d-block")
                        }}
                        >
                            <i class={`bi bi-star${star3}`}></i>
                        </button>

                        <button 
                        style={styles}
                        onClick={()=>{
                            handleStar(setRating(4));
                            setHide("d-block")
                        }}
                        >
                            <i class={`bi bi-star${star4}`}></i>
                        </button>
                        
                        <button 
                        style={styles}
                        onClick={()=>{
                            handleStar(setRating(5));
                            setHide("d-block")
                        }}
                        >
                            <i class={`bi bi-star${star5}`}></i>
                        </button>
                    </div>
                    <p className={`text-center ${hide}`}>
                        { 
                        <button className="btn btn-outline-info" style={{borderRadius: "0.8rem"}}
                        onClick={async ()=>{
                            updateRating(await setRating(rating));
                            console.log(rating)
                            setHide("d-none");
                        }}
                        >
                            update
                        </button>
                        }
                    </p>
                    </>

                    :

                    <>
                    <div className="text-center">
                        <p><em>Rate this movie</em></p>
                        <button 
                        style={styles}
                        onClick={()=>{
                            handleStar(setRating(1));
                            setHide("d-block")
                        }}
                        >
                            <i class={`bi bi-star${star1}`}></i>
                        </button>

                        <button 
                        style={styles}
                        onClick={()=>{
                            handleStar(setRating(2));
                            setHide("d-block")
                        }}
                        >
                            <i class={`bi bi-star${star2}`}></i>
                        </button>

                        <button 
                        style={styles}
                        onClick={()=>{
                            handleStar(setRating(3));
                            setHide("d-block")
                        }}
                        >
                            <i class={`bi bi-star${star3}`}></i>
                        </button>

                        <button 
                        style={styles}
                        onClick={()=>{
                            handleStar(setRating(4));
                            setHide("d-block")
                        }}
                        >
                            <i class={`bi bi-star${star4}`}></i>
                        </button>
                        
                        <button 
                        style={styles}
                        onClick={()=>{
                            handleStar(setRating(5));
                            setHide("d-block")
                        }}
                        >
                            <i class={`bi bi-star${star5}`}></i>
                        </button>
                    </div>
                    <p className={`text-center ${hide}`}>
                        { 
                        <button className="btn btn-outline-info" style={{borderRadius: "0.8rem"}}
                        onClick={async ()=>{
                            createRate(await setRating(rating));
                            console.log(rating)
                            setHide("d-none");
                        }}
                        >
                            send
                        </button>
                        }
                    </p>
                    </>
                }
            
                {
                     errorRating?

                     <>
                     <Fade top>
                         <div className="text-center">
                             <small style={{color: "red"}} >
                             <i class="bi bi-exclamation-circle-fill"></i> whoops.. sorry, 
                             <p>
                             u have to login first, before giving a rating
                             </p>
                             </small>    
                         </div>
                     </Fade>
                     </>
     
                     :
                     <>
                     </>
                }
            <br></br>
            
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Comment.."
                    className="me-2"
                    aria-label="Search" 
                    onChange={(event)=>setKomentar(event.target.value)}
                />
                <Button 
                variant="outline-secondary"
                onClick={()=>createComment()}
                >Post</Button>
            </Form>
            {
                errorComment?

                <>
                    <Fade bottom>
                         <div className="text-center">
                             <small style={{color: "red"}} >
                             <br></br>
                             <i class="bi bi-exclamation-circle-fill"></i> whoops.. this one also, 
                             <p>
                             u have to login first, before giving a comment
                             </p>
                             </small>    
                         </div>
                    </Fade>
                </>

                :
                <>
                </>
            }
        </div>
    )
}

export default RatingKomen