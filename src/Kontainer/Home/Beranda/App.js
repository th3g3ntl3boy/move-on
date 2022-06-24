// Library
import React, {Component} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

// Halaman
import Beranda from './Beranda.js';
import Category from '../Category/Category.js';
import About from '../About/About.js';
import DetailsMovies from '../../Details/DetailsMovies.js';
import DetailsArticle from '../../Article/DetailsArticle.js';
import SearchResult from '../../Article/SearchResult.js';

// komponen
import NavBar from '../../../Komponen/NavBar.js';


// Stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';
import User from '../User/User.js';


// client
const client = new ApolloClient({
  uri: 'https://backend-artikel.herokuapp.com/graphql',
  cache: new InMemoryCache()
})


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
                    <Route path="category/:genre" element={<Category/>} />
                    <Route path="about" element={<About/>} />
                    <Route path="moviesdetail/:id" element={<DetailsMovies />} />
                    <Route path="film/:id" element={<DetailsArticle />} />
                    <Route path="search/:name" element={<SearchResult/>} />
                    <Route path="user" element={<User />} />
              </Routes>
              <footer style={{position: "relative", left: "0", bottom:"0", width:"100%", height:"80px"}}>
                <div style={{color: "#7a4de2"}}>
                  <hr></hr>
                  <div class="text-center p-4" >
                      © 2022 Copyright: Kelompok 9
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
