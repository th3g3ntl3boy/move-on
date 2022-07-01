// import { useMutation, useQuery } from '@apollo/client';
import React from 'react'
import {Container, Row, Col, Figure} from 'react-bootstrap'
// import { ADDLIKECOMMENT, GETUSERCOMMENTLIKE, MOVIESDETAIL, UPDATELIKECOMMENT } from '../Hooks/Querry';
// import { AuthContext } from '../Hooks/authContext';
import './Komen.css'



const styles = {
    backgroundColor: "transparent",
    backgroundRepeat: "no-repeat",
    border: "none",
    cursor: "pointer",
    overflow: "hidden",
    outline: "none",
    color: "white"
};

const Komen = (props) => {
    // const {id} = useParams()
    // const {user} = useContext(AuthContext)

    // const [status, setStatus] = useState(0)
    // const [fillUp, setFillUp] = useState("")
    // const [fillDown, setFillDown] = useState("")

    // const {data} = useQuery(MOVIESDETAIL,{
    //     variables: {id:id}
    // })

    // const {data: userTrackComment} = useQuery(GETUSERCOMMENTLIKE,{
    //     variables: {}
    // })

    // const [addLike, {error: errA}] = useMutation(ADDLIKECOMMENT,{
    //     variables: {userid: user?.id, commentid: data?.movie.data.attributes.comments.data.id , status: status},
    //     refetchQueries: [
    //         {
    //             query: MOVIESDETAIL
    //         }, 'getMovies'
    //     ]
    // })

    // const [updateLike, {error: errU}] = useMutation(UPDATELIKECOMMENT,{
    //     variables: {userid: user?.id, commentid: data?.movie.data.attributes.comments.data.id , status: status},
    //     refetchQueries: [
    //         {
    //             query: MOVIESDETAIL
    //         }, 'getMovies'
    //     ]
    // })

    // function handleStatus(){
    //     if(status===0){
    //         setFillUp("")
    //         setFillDown("")
    //     }if(status===1){
    //         setFillUp("-fill")
    //         setFillDown("")
    //     }if(status===-1){
    //         setFillUp("")
    //         setFillDown("-fill")
    //     }
    // }

    // useEffect(()=>{
    //     handleStatus();
    //     console.log(status)
    // }, [status])

    return (
    <div>
        <Container>
            <Row className="align-items-center">
                <hr></hr>
                <Col xs={2} className="my-4 left-center align-center">
                    <Figure>
                        <div className="repons">
                            <div className='text-center'>
                                <i class="bi bi-person-circle" style={{ fontSize: 40 }}></i>
                            </div>
                            <small>
                                <Figure.Caption className="text-center">
                                    {props.user}
                                </Figure.Caption>
                            </small>
                        </div>
                    </Figure>
                </Col>
                <Col xs={9} className="left-center">
                    <div className="respons-comment">
                        {props.comment}
                        <div className="text-end">
                            <i class="bi bi-reply-fill"></i><small><em> commented at {props.date} </em></small>
                        </div>
                    </div>
                </Col>
                {/* <Col xs={1} className="left-center">
                    <div className="up">
                        <div className='text-center'>
                        {   
                        data?.movie.data.attributes.comments.data.map((cmt)=>(
                            cmt.commentslikes.data.length>0?
                            <>
                            <button
                            style={styles}
                            onClick={async()=>{
                                updateLike(await setStatus(1))
                            }}>
                                <i class={`bi bi-caret-up${fillUp}`} style={{ fontSize: 25 }}></i>
                            </button>
                            {' '}{props.like}{' '}
                            <button 
                            style={styles}
                            onClick={async()=>{
                                updateLike(await setStatus(-1))
                            }}>
                                <i class={`bi bi-caret-down${fillDown}`} style={{ fontSize: 25 }}></i>
                            </button>
                            </>

                            :

                            <>
                            <button
                            style={styles}
                            onClick={async()=>{
                                addLike(await setStatus(1))
                            }}>
                                <i class={`bi bi-caret-up${fillUp}`} style={{ fontSize: 25 }}></i>
                            </button>
                            {' '}{props.like}{' '}
                            <button 
                            style={styles}
                            onClick={async()=>{
                                addLike(await setStatus(-1))
                            }}>
                                <i class={`bi bi-caret-down${fillDown}`} style={{ fontSize: 25 }}></i>
                            </button>
                            </>
                        ))
                        }
                       
                    </div>

                    </div>
                </Col> */}
                <hr></hr>
            </Row>
        </Container>
    </div>
  )
}

export default Komen