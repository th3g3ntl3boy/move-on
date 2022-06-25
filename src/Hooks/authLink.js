import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"
import {setContext} from "@apollo/client/link/context"

const httpLink = createHttpLink({
    uri: 'https://backend-artikel.herokuapp.com'
})

const authorizationLink = setContext((_,{headers})=>{
    return {
        headers :{
            ...headers,
            authorization: localStorage.getItem("token") || ""
        }
    }
})

const client = new ApolloClient({
    link: authorizationLink.concat(httpLink),
    cacahe: new InMemoryCache()
})


export default client