import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

class BestBooks extends Component {

    constructor(props) {
        super(props);
        this.state = {
          books: []
        };
      }
    
    getAllBooks = async () => {
        // e.preventDefault();
        console.log('user', this.props.auth0.user.name)
        const SERVER = 'http://localhost:3002';
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
    componentDidMount() {
        this.getAllBooks()
    }
    
    render() {
        return (
            <>
            {this.state.books.map(book =>
                <ul style={{ listStyleType: "none" }}>
                    <li key={book._id}>Name: {book.name}</li>
                    <li> Description: {book.description}</li>
                    <li> Status: {book.status}</li>
                </ul>
            )}
            </>
        )
    }
}

export default withAuth0(BestBooks);