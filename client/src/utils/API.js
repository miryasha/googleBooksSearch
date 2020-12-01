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
    return axios.get (`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}+author:${author}&key=${process.env.REACT_APP_SECRET_API_KEY}`)
    .catch(err => {
      console.log(err);
    })

  }

};
