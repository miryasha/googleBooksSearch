import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import SaveBtn from "../components/SaveBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Books extends Component {
  
  state = {
    books: [],
    search: [],
    title: "",
    author: "",
  };

   componentDidMount() {
  }

  // this.state.books
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



  // Deletes a book from the db 
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  // updating component state 
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
              <h1>Find Your Book Here</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author"
              />

              <FormBtn
                disabled={!(this.state.author || this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Search a Book
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <h3>Results</h3>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          {this.state.search ?
          <List>
          {this.state.search.map(result => (
            <ListItem key={result.id}>
            <Row>
              <img src={result.volumeInfo.imageLinks.thumbnail}  alt={result.volumeInfo.title + " Image"}/>
            </Row>
            <Row>
              <a href={result.volumeInfo.infoLink} alt="searchResult" target="_blank" rel="noopener noreferrer">
            {result.volumeInfo.title}
            <span><br /></span>
            by {result.volumeInfo.authors[0]}
            </a>
            </Row>
            <Row>
                {result.volumeInfo.description ?
                result.volumeInfo.description.length > 250 ?
                result.volumeInfo.description.substr(0,250) + "...":
                result.volumeInfo.description.substr(0,250):
                "No Description available"}
            </Row>
            <Row>
              <Col size="md-10"></Col>
              <Col size="md-2">
                <SaveBtn onClick={() => this.saveBooks(result.volumeInfo.title, result.volumeInfo.authors, result.volumeInfo.description, result.volumeInfo.imageLinks.thumbnail, result.volumeInfo.infoLink)} />
              </Col>
            </Row>
            </ListItem>
            ))}
              </List>
              : <h3>there is no result</h3>}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;