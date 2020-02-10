import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Search extends Component {
  state = {
    books:[],
    search: ""
  };

  componentDidMount() {
    this.searchBooks("Harry Potter");
  }

  searchBooks = name => {
    API.searchBooks(name)
      .then(res =>{
        console.log(res.data.items);
        this.setState({ books: res.data.items})}
      )
      .catch(err => console.log(err));
  };

  saveBook = book => {
    let bookToSend = {
      title:book.volumeInfo.title,
      authors:book.volumeInfo.authors||["Unknown"],
      description:book.volumeInfo.description||"",
      image:book.volumeInfo.imageLinks?book.volumeInfo.imageLinks.thumbnail:"",
      link:book.volumeInfo.infoLink
    }
    API.saveBook(bookToSend)
      .then(res =>{
        console.log(res)
        let filteredBooks = this.state.books.filter(checkBook=>checkBook.id!==book.id)
        this.setState({books:filteredBooks});
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    this.setState({
      search: event.target.value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.search) {
      this.searchBooks(this.state.search);
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="12">
            <Jumbotron>
              <h1>(React) Google Books Search</h1>
              <h2>Search for and Save Books of Interest</h2>
            </Jumbotron>
          </Col>
        </Row>

        <Row>
          <Col size="12">
            <Jumbotron>
              <h3 className="text-left">Book Search</h3>
              <form>
                <Input
                  value={this.state.search}
                  onChange={this.handleInputChange}
                  id="search"
                  placeholder="Harry Potter"
                  label="Book"
                />
                <FormBtn
                  disabled={!(this.state.search)}
                  onClick={this.handleFormSubmit}
                >
                  Search
                </FormBtn>  
              </form>
            </Jumbotron>
          </Col>
        </Row>

        <Row>
          <Col size="12">
            <Jumbotron>
              <h3 className="text-left">Results</h3>
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <ListItem 
                      id={book.id}
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      authors={book.volumeInfo.authors||""}
                      description={book.volumeInfo.description}
                      link={book.volumeInfo.infoLink}
                      image={book.volumeInfo.imageLinks?book.volumeInfo.imageLinks.thumbnail:""}
                      onClick={()=>this.saveBook(book)}
                      buttonText="Save"
                    />
                  ))}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
