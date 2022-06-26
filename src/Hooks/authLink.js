import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"
import {setContext} from "@apollo/client/link/context"

const httpLink = createHttpLink({
    uri: 'https://backend-artikel.herokuapp.com/graphql'
})

const authorizationLink = setContext((_,{headers})=>{
    return {
        headers :{
            ...headers,
            Authorization: 'Bearer '+localStorage.getItem("token") || ""
        }
    }
})

const client = new ApolloClient({
    link: authorizationLink.concat(httpLink),
    cache: new InMemoryCache()
})


export default client