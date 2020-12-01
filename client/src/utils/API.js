import axios from "axios";

export default {
  
  getBooks: function() {
    return axios.get("/api/books");
  },

  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },

  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves to DB
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  googleSearch: function(bookTitle, author) {
    return axios.get (`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}+author:${author}`)
    .catch(err => {
      console.log(err);
    })

  }

};
