import React from 'react';
import Typewriter from 'typewriter-effect';
import { useContext } from 'react';
import { AuthContext } from '../Hooks/authContext';
import { GETIDENTITY } from '../Hooks/Querry';
import { useQuery } from '@apollo/client/react';

const Header = () =>{
    const {user} = useContext(AuthContext)

    const {data: identity} = useQuery(GETIDENTITY,{
        variables: {id:user?.id}
    })

    console.log(identity)

    const dir = "identity?.usersPermissionsUser.data.attributes.username"

    return(
        <div>
            <div className="text-center" style={{color: "white"}}>
                <h1>Welcome to our site, 
                </h1>
                <h3>
                    {
                        user? 
                        <>
                            <Typewriter
                                    onInit={(typewriter) => {
                                    typewriter.typeString(localStorage.getItem("name") + " !")
                                    .start();
                                }}
                            />
                        </> 
                        
                        : 
                        
                        <>
                            <Typewriter
                                    onInit={(typewriter) => {
                                    typewriter.typeString('Folks !')
                                    .start();
                                }}
                            />
                        </>
                    }
                   
                </h3>
                <p>What do we have here</p>
                <hr style={{color: "#7a4de2"}}></hr>
            </div>
        </div>
    )
}

export default Header;