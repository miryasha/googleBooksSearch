const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/google-reading-list"
);

const bookSeed = [
  {
    title: "The Blind Owl",
    author: " Sadegh Hedayat",
    description:
      "Written in Persian, it tells the story of an unnamed pen case painter, the narrator, who sees in his macabre, feverish nightmares that the presence of death annihilates all that is imaginary",
    image: "https://upload.wikimedia.org/wikipedia/en/0/06/The_blind_owl.jpg",
    link: "Another test"
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
