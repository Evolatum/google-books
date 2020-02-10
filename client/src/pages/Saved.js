import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        {
          console.log(res.data)
          this.setState({ books: res.data})
        }
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
    <Container>
    <Row>
      <Col size="12">
        <Jumbotron>
          <h1>(Sketchy) Google Books Search</h1>
          <h2>Search for and Save Books of Interest</h2>
        </Jumbotron>
      </Col>
    </Row>

    <Row>
      <Col size="12">
        <Jumbotron>
          <h3 className="text-left">Saved Books</h3>
          {this.state.books.length ? (
            <List>
              {this.state.books.map(book => (
                <ListItem 
                  id={book._id}
                  key={book._id}
                  title={book.title}
                  subtitle={book.subtitle}
                  authors={book.authors}
                  description={book.description}
                  link={book.link}
                  image={book.image==="No Image"?"":book.image}
                  onClick={()=>this.deleteBook(book._id)}
                  buttonText="Delete"
                />
              ))}
            </List>
          ) : (
            <h3>No Books Saved in Database</h3>
          )}
        </Jumbotron>
      </Col>
    </Row>
    </Container>
    );
  }
}

export default Saved;
