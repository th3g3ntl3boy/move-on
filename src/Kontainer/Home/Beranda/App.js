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
  uri: 'http://localhost:1337/graphql',
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
                    <Route path="category" element={<Category/>} />
                    <Route path="about" element={<About/>} />
                    <Route path="moviesdetail" element={<DetailsMovies />} />
                    <Route path="film/:id" element={<DetailsArticle />} />
                    <Route path="search/:name" element={<SearchResult/>} />
                    <Route path="user" element={<User />} />
              </Routes>
            </ApolloProvider>
          </BrowserRouter>
        </div>
    )
  }
}

export default App;
