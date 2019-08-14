const express = require("express");
const router = express.Router();

// require book model in order to use it for CRUD
const Book = require("../models/Book");

// GET - to display the form for Creating the authors
router.get("/books/new", (req, res, next) => {
  // make sure yoy see all the folders that are inside the "views" folder,
  // you don't have to specify "views" folder tho
  res.render("book-views/new-book");
});

// post route to create a new author in the DB with form that directs to this request
{/* <form action="/authors/create" method="post"> */}
router.post("/books/create", (req, res, next) => {
  // console.log("THE FORM: ", req.body);
  Book
    .create(req.body)  //creates/saves new document using the req.body, which gets us form data as object , 
    .then( (newBook) => {
      console.log("NEW AUTHOR: ", newBook) 
      res.redirect('bookViews/all-books-view');
    })
    .catch(err => console.log("Error while creating a new author: ", err));


});

router.get("/books", (req,res,next) => {
  Author
  .find()
  .then((booksFromDB) =>  res.render("book-views/allBooks", {books:booksFromDB}) )
  .catch(err => console.log(`Error while getting authors from the DB: `,err ))

})


// in order to use routes anywhere else in this application, we have to export them
module.exports = router;