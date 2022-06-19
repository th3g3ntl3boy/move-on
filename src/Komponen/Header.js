import React from 'react';
import Typewriter from 'typewriter-effect';

const Header = () =>{
    return(
        <div>
            <div className="text-center" style={{color: "white"}}>
                <h1>Welcome to our site, 
                </h1>
                <h3>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('User Name !')
                            .start();
                          }}
                    />
                </h3>
                <p>Let's move on to your favorite movies</p>
                <hr style={{color: "#7a4de2"}}></hr>
            </div>
        </div>
    )
}

export default Header;