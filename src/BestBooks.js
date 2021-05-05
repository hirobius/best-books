import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
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

    handleDelete = (id) => {
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/books/${id}?user=${this.props.auth0.user.email}`).then(responseData => {
          this.setState({ 
            books: responseData.data
          })
        })
      }
    
    render() {
        let allBooks = this.state.books.map((book,_id)=>(
            <Carousel.Item key={book._id} style={{textAlign: "center"}}>
              <Carousel.Caption>
                <h5>Name: {book.name}</h5>
                <p>Description: {book.description}</p>
                <p>Status: {book.status}</p>
              </Carousel.Caption>
            </Carousel.Item>
        ))
        return (
            <Container style={{background: "grey"}}>
                <Carousel>
                    {allBooks}
                </Carousel>
                
            </Container>
   
        )
    }
}

export default withAuth0(BestBooks);