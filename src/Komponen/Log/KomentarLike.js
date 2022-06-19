import React, {useState, useRef} from 'react'

import { useMutation, useQuery } from '@apollo/client';
import { UPDATELIKE, UPDATEDISLIKE, UPDATESAD, UPDATESMILE, UPDATENAH, TAMBAHKOMENTAR, ARTIKEL } from '../../Hooks/Querry';
import { useParams } from 'react-router';


import './emot.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faFaceSmile, faFaceSadCry, faFaceMeh } from '@fortawesome/free-regular-svg-icons';
import { Button, Form, FormControl } from 'react-bootstrap';
import RubberBand from 'react-reveal/RubberBand';

const styles = {
    backgroundColor: "transparent",
    backgroundRepeat: "no-repeat",
    border: "none",
    cursor: "pointer",
    overflow: "hidden",
    outline: "none",
};
  

const KomentarLike = () => {
    // ambil parameter
    const {id} = useParams()
    // querry parameter id
    const formRef = useRef()
    const {data} = useQuery(ARTIKEL,{
        variables: {id: id},
    })
    // inisiasi komen
    const [komen, setKomen] = useState("")
    const [suka, setSuka] = useState(0)
    const [tidaksuka, setTidaksuka] = useState(0)
    const [sedih, setSedih] = useState(0)
    const [senyum, setSenyum] = useState(0)
    const [hm, setHm] = useState(0)

    const [updateLike] = useMutation(UPDATELIKE,{
        variables: {id: id, like: suka}, 
        onCompleted: (data)=>console.log(data),
        refetchQueries:[
            {
                query: ARTIKEL
            }, 'Artikels'
        ]
    })

    const [updateDislike] = useMutation(UPDATEDISLIKE,{
        variables: {id: id, dislike: tidaksuka}, 
        onCompleted: (data)=>console.log(data),
        refetchQueries:[
            {
                query: ARTIKEL
            }, 'Artikels'
        ]
    })

    const [updateSmile] = useMutation(UPDATESMILE,{
        variables: {id: id, smile: senyum}, 
        onCompleted: (data)=>console.log(data),
        refetchQueries:[
            {
                query: ARTIKEL
            }, 'Artikels'
        ]
    })

    const [updateSad] = useMutation(UPDATESAD,{
        variables: {id: id, sad: sedih}, 
        onCompleted: (data)=>console.log(data),
        refetchQueries:[
            {
                query: ARTIKEL
            }, 'Artikels'
        ]
    })

    const [updateNah] = useMutation(UPDATENAH,{
        variables: {id: id, nah: hm}, 
        onCompleted: (data)=>console.log(data),
        refetchQueries:[
            {
                query: ARTIKEL
            }, 'Artikels'
        ]
    })

    const [tambahKomentar] = useMutation(TAMBAHKOMENTAR,{
        variables: {id: id, komen: komen}, 
        onCompleted: ()=> formRef.current.reset(),
        refetchQueries:[
            {
                query: ARTIKEL
            }, 'Artikels'
        ]

    })
    
    // show animasi
    const [likeanimate, setLike] = useState(false)
    const [disanimate, setDis] = useState(false)
    const [smileanimate, setSmile] = useState(false)
    const [sadanimate, setSad] = useState(false)
    const [nahanimate, setNah] = useState(false)

    return (
        <div>
            <div className="text-center">
                <p className="text-muted"><em>was this article helpful ?</em></p>

                    {/* like triggrer */}
                    <button style={styles} 
                    onClick={async ()=>{
                        updateLike(
                            await setSuka(data.algoritma.data.attributes.like+1)
                            );
                        setLike(true)
                    }}
                    >
                        <RubberBand when={likeanimate}>
                            <FontAwesomeIcon icon={faThumbsUp} fade/>
                        </RubberBand>
                        <small> {data.algoritma.data.attributes.like}</small>
                        
                    </button>
                    {/* {show ? <Notif isi="it work"/> : null} */}
                    
                    {/* dislike triggrer */}

                    <button style={styles}
                    onClick={async ()=>{
                        updateDislike(await setTidaksuka(data.algoritma.data.attributes.dislike+1));
                        setDis(true)
                    }}
                    >
                        <RubberBand when={disanimate}>
                            <FontAwesomeIcon icon={faThumbsDown} fade/>
                        </RubberBand>
                        
                        <small> {data.algoritma.data.attributes.dislike}</small>
                    </button>
                    {/*  */}
                    <button style={styles}
                    onClick={async ()=>{
                        updateSmile(await setSenyum(data.algoritma.data.attributes.smile+1));
                        setSmile(true)
                    }}
                    >
                        <RubberBand when={smileanimate}>
                            <FontAwesomeIcon icon={faFaceSmile} fade/>
                        </RubberBand>
                        <small> {data.algoritma.data.attributes.smile}</small>
                    </button>
                    
                    <button style={styles}
                    onClick={async()=>{
                        updateSad(await setSedih(data.algoritma.data.attributes.sad+1));
                        setSad(true)
                    }}
                    >
                        <RubberBand when={sadanimate}>
                            <FontAwesomeIcon icon={faFaceSadCry} fade/>
                        </RubberBand>
                        <small> {data.algoritma.data.attributes.sad}</small>
                    </button>

                    <button style={styles}
                    onClick={async()=>{
                        updateNah(await setHm(data.algoritma.data.attributes.nah+1));
                        setNah(true)
                    }}
                    >
                        <RubberBand when={nahanimate}>
                            <FontAwesomeIcon icon={faFaceMeh} fade/>
                        </RubberBand>
                        
                        <small> {data.algoritma.data.attributes.nah}</small>
                    </button>
                
            </div>
            <br></br>
            {/* komen triggrer */}
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Comment.."
                    className="me-2"
                    aria-label="Search"
                    onChange={(event)=>{
                        setKomen(event.target.value)
                    }}
                />
                <Button 
                variant="outline-secondary"
                onClick={()=>tambahKomentar()}
                >Post</Button>
            </Form>
        </div>
  )
}

export default KomentarLike
