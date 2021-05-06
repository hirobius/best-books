import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Button, Row, Col } from 'react-bootstrap';
import './MyFavoriteBooks.css';
import BestBooks from './BestBooks'
import Books from './Books'
import axios from 'axios';
import { FaTrashAlt } from 'react-icons/fa';


class MyFavoriteBooks extends React.Component {

   
  render() {
    
    return(
      <>
        <Jumbotron>
          <h1>My Favorite Books</h1>
          <p>
            This is a collection of my favorite books
          </p>
          <Button variant="success" onClick={this.props.deleteBook}>Delete Book</Button>
        </Jumbotron>
        <BestBooks />
      </>
    )
  }
}


export default MyFavoriteBooks;
