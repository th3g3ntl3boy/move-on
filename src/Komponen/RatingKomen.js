import React, {useState, useEffect, useContext} from 'react'
import { AuthContext } from '../Hooks/authContext';
import { CREATERATING, GETRATINGMOV } from '../Hooks/Querry';

import {Form, FormControl, Button} from 'react-bootstrap'

import { useMutation } from '@apollo/client/react';
import { useParams } from 'react-router';


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
    
    const [rating, setRating] = useState(0)
    const [star1, setStar1 ] = useState("")
    const [star2, setStar2 ] = useState("")
    const [star3, setStar3 ] = useState("")
    const [star4, setStar4 ] = useState("")
    const [star5, setStar5 ] = useState("")

    const [hide, setHide] = useState("d-none")

    const [createRate, {loading, data}] = useMutation(CREATERATING,{
        variables: {bintang: rating, userId: user?.id, movieId: movId},
        onCompleted: (data)=>console.log(data),
        refetchQueries :[
            {
                query: GETRATINGMOV
            }, 'getRatingsMov'
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
            <br></br>
            
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Comment.."
                    className="me-2"
                    aria-label="Search" 
                    
                />
                <Button 
                variant="outline-secondary"
                >Post</Button>
            </Form>
        </div>
    )
}

export default RatingKomen