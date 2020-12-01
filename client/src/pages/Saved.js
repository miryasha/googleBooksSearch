import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Books extends Component {
  // initial state
  state = {
    books: [],
    search: [],
    title: "",
    author: "",
  };

  // this.state.books
  componentDidMount() {
    this.loadBooks();
  }

  //  this.state.books
  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", description: "", thumbnail: "", infoLink: "" })
      )
      .catch(err => console.log(err));
  };

  saveBooks = (title, author, description, thumbnail, infoLink) => {
    API.saveBook({title: title, author:author, description:description, image: thumbnail, link: infoLink})
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  }


  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title || this.state.author) {
      API.googleSearch(
        this.state.title,
        this.state.author,
      )
        .then(res => {
          this.setState({search: res.data.items})
    })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>My Reading List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => {
                  return (
                    <ListItem key={book._id}>
                      <Row>
                      <img src={book.image} alt={book.title + " image"} />
                      </Row>
                      <Row>
                      <a href={"/books/" + book._id}>
                      <strong>
                          {book.title} by {book.author}
                        </strong>
                      </a>
                      </Row>
                      <Row>
                        {book.description ?
                        book.description.length > 250 ?
                        book.description.substr(0,250) + "...":
                        book.description.substr(0,250):
                        "No Description available"}
                      </Row>
                      <Row>
                        <Col size="md-9"></Col>
                        <Col size="md-3">
                          <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                        </Col>
                      </Row>
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;