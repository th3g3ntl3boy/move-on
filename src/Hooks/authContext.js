import React, {createContext, useReducer} from 'react'
import jwt_decode from "jwt-decode"

const initalState = {
    user: null
}

if(localStorage.getItem("token")){
    const decode = jwt_decode(localStorage.getItem("token"))
    if(decode.exp * 1000 < Date.now()){
        localStorage.clear()
    }else{
        initalState.user = decode
    }
}

const AuthContext = createContext({
    user: null,
    login: (userData) => {},
    logout: () => {}

})

function AuthReducer(state, action){
    switch(action.type){
        case 'LOGIN' : 
            return{
                ...state,
                user: action.payload
            }
        
        case 'LOGOUT':
            return{
                ...state,
                user: null
            }

        default:
            return state
    }
}

function AuthProvider(props) {
    const[state, dispatch] = useReducer(AuthReducer, initalState)
    const login = (userData) => {
        localStorage.setItem("token", userData.jwt);
        
        dispatch({
            type: 'LOGIN',
            payload: userData
        })
    }

    function logout(){
        localStorage.removeItem("token")
        dispatch({type: 'LOGOUT'})
    }

    return(
        <AuthContext.Provider
            value={{user: state.user, login, logout}}
            {...props}
        />
    )
}

export {AuthContext, AuthProvider}