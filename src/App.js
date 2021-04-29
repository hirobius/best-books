import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import { withAuth0 } from '@auth0/auth0-react';
import MyFavoriteBooks from './MyFavoriteBooks';
import Login from './Login';
import Profile from './Profile';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      books: [],
      name: ''
    }
  }

  getAllBooks = async (e) => {
    e.preventDefault();
    const SERVER = 'http://localhost:3002/';
    try {
      const books = await axios.get(`${SERVER}/books`, {params: { name: this.state.name }});
      console.log(books.data)
      this.setState({ books: books.data });

    } catch(error){
      console.log(error);
    }
  }

  updateName = (name) => this.setState({ name });

  render() {
    const { isAuthenticated } = this.props.auth0;
    console.log('app', this.props);
    return(
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/">
                {isAuthenticated ? <MyFavoriteBooks /> : <Login />}
              </Route >
              <Route exact path="/profile"><Profile getAllBooks={this.getAllBooks} updateName={this.updateName}/></Route>
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
