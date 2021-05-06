import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import { withAuth0 } from '@auth0/auth0-react';
import MyFavoriteBooks from './MyFavoriteBooks'
import Login from './Login'
import Profile from './Profile';
import BookForm from './BookForm'
import Books from './Books'


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isAddBookState: false,
      isDeleteBookState: false,
      books: [],
      name: '',
    }
  }
  triggerAddBookState = () => {
    this.setState({
      isAddBookState: true
    })
  }

  triggerDeleteBookState = () => {
    this.setState({
      isDeleteBookState: true
    })
  }

  updateName = (name) => this.setState({ name });
  
  render() {
    const { isAuthenticated } = this.props.auth0;
    console.log('user:',  this.props);
    console.log('app', this.props);
    return(
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/">
                {isAuthenticated ? <MyFavoriteBooks deleteBook={this.triggerDeleteBookState} /> : <Login />}
              </Route >
              <Route exact path="/profile"><Profile /></Route>
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
