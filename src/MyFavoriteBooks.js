import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { withAuth0 } from '@auth0/auth0-react';
import { Button, Row, Col } from 'react-bootstrap';
import './MyFavoriteBooks.css';
import BestBooks from './BestBooks'
import BookForm from './BookForm'
import Books from './Books'
import axios from 'axios';
import { FaTrashAlt } from 'react-icons/fa';


class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  setBooks = (books) => {
    console.log(books);
    this.setState({
      books: books
    })
  }

  getAllBooks = async () => {
    // e.preventDefault();
    console.log('user', this.props.auth0.user.name)
    const SERVER = 'http://localhost:3001'
    try {
      const books = await axios.get(`${SERVER}/books`, { params: { name: this.props.auth0.user.name } });
      console.log(books.data)
      this.setState({
        books: books.data
      })

    } catch (error) {
      console.log(error);
    }
  }
  componentDidMount() {
    this.getAllBooks()
  }

  handleDelete = (id) => {
    console.log('delete function', id);
    const SERVER = 'http://localhost:3001'
    axios.delete(`${SERVER}/books/${id}?user=${this.props.auth0.user.email}`).then(responseData => {
      this.setState({
        books: responseData.data
      })
    })
  }

  render() {

    return (
      <>
        <Jumbotron>
          <h1>My Favorite Books</h1>
          <p>
            This is a collection of my favorite books
          </p>
          <BookForm updatebooks={this.setBooks} email={this.props.auth0.user.email} />
          
          {/* <Button variant="success" onClick={this.props.deleteBook}>Delete Book</Button> */}
        </Jumbotron>
        <BestBooks books={this.state.books} deleteBook={this.handleDelete}/>
      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
