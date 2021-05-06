import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { FaTrashAlt } from 'react-icons/fa';


class Books extends Component {

    constructor(props) {
        super(props);
        this.state = {
          books: []
        };
      }
    
    getAllBooks = async () => {
        // e.preventDefault();
        console.log('user', this.props.auth0.user.name)
        const SERVER = 'http://localhost:3001';
        try {
        const books = await axios.get(`${SERVER}/books`, {params: { name: this.props.auth0.user.name }});
        console.log(books.data)
        this.setState({
        books: books.data
        })
    
        } catch(error){
        console.log(error);
        }
    }

    handleDelete = (id) => {
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/books/${id}?user=${this.props.auth0.user.email}`).then(responseData => {
          this.setState({ 
            books: responseData.data
          })
        })
      }
    
    render() {

        return (
            <Container >
                {this.state.books.length > 0 && <ul>
                {this.state.books.map(book => 
                <li key={book._id}>{book.name}: {book.description} <button onClick={e => this.handleDelete(book._id)} ><FaTrashAlt /></button></li>
                )}
                </ul>}
            </Container>
        )
    }
}

export default withAuth0(Books);