// Library
import React, {Component} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';
import {setContext} from "@apollo/client/link/context"
// Halaman
import Beranda from './Beranda.js';
import Category from '../Category/Category.js';
import About from '../About/About.js';
import DetailsMovies from '../../Details/DetailsMovies.js';
import SearchResult from '../../Article/SearchResult.js';

// komponen
import NavBar from '../../../Komponen/NavBar.js';


// Stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';
import User from '../User/User.js';


// client


const httpLink = createHttpLink({
  uri: 'https://backend-artikel.herokuapp.com/graphql'
})

const authorizationLink = setContext((_,{headers})=>{
  return {
      headers :{
          ...headers,
          Authorization: localStorage.getItem("token") !== null && 'Bearer '+ localStorage.getItem("token") ||  ""
      }
  }
})

const client = new ApolloClient({
  link: authorizationLink.concat(httpLink),
  cache: new InMemoryCache()
})





// const public2 = new ApolloClient({
//   uri: 'https://backend-artikel.herokuapp.com/graphql',
//   cache: new InMemoryCache()
// })


class App extends Component {
  render(){
    return(
        <div>
          <BrowserRouter basename="/move-on">
            <ApolloProvider client={client}>
              <NavBar />
              <br></br>
              <br></br>
              <Routes>
                    <Route exact path="/" element={<Beranda />} />
                    <Route path="category/:id" element={<Category/>} />
                    <Route path="about" element={<About/>} />
                    <Route path="moviesdetail/:id" element={<DetailsMovies />} />
                    <Route path="search/:name" element={<SearchResult/>} />
                    <Route path="user/:id" element={<User />} />
              </Routes>
              <footer style={{position: "relative", left: "0", bottom:"0", width:"100%", height:"80px"}}>
                <div style={{color: "#7a4de2"}}>
                  <hr></hr>
                  <div class="text-center p-4" >
                      Kelompok 9
                  </div>
                </div>
              </footer>
            </ApolloProvider>
          </BrowserRouter>
        </div>
    )
  }
}

export default App;
