import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './MyFavoriteBooks.css';
import BestBooks from './BestBooks';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import './BookForm.css'

class BookForm extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      books: [],
      name: '',
      status:''
    }
  }
  
  handleNameInput = (e) => {
    this.setState({name: e.target.value});
  }
  handleDescriptionInput = (e) => {
    this.setState({description: e.target.value});
  }
  handleStatusInput = (e) => {
    this.setState({status: e.target.value});
  }

  fetchUserData = () => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/users/${this.state.email}`)
    .then(serverResponse => {
      console.log(serverResponse.data);
      this.setState({
        gifts: serverResponse.data[0].gifts
      })
    });
  }

  handleCreateBook = (e) => {
    e.preventDefault();
    console.log('name', this.state.name, 'description', this.state.description, 'status', this.state.status, 'email', this.props.email);
    // make the request to the server with the info the user typed in
    axios.post('http://localhost:3002/addbooks', {
      email: this.props.auth0.email,
      description: this.state.description,
      status: this.state.status,
      name: this.state.name
    }).then( response => {
      console.log(response.data);
      this.setState({
        books: response.data
      })
    });
  }

  render() {
    const { user } = this.props.auth0;
    return(
      <form onSubmit={this.handleCreateBook}>
        <input type="text" onInput={this.handleNameInput} placeholder="Enter your Fav Book"  />
        <input type="password" onInput={this.handleDescriptionInput} placeholder="DEscription"  />
        <input type="password"  onInput={this.handleStatusInput} placeholder="Published/On-Progress"  />
        <button type="submit" className="myButton">Submit</button>
      </form>
    )
  }
}

export default withAuth0(BookForm);
