import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import { withAuth0 } from '@auth0/auth0-react';
import MyFavoriteBooks from './MyFavoriteBooks'
import Login from './Login'
import Profile from './Profile';
import BookForm from './BookForm'


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isEmptyState: true ,
      books: [],
      name: ''
    }
  }
  triggerAddBookState = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isAddBookState: true
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
                {isAuthenticated ? <MyFavoriteBooks addBook={this.triggerAddBookState}/> : <Login />}
                {this.state.isAddBookState? <BookForm email={this.props.auth0.user.email}/> : ''}
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
