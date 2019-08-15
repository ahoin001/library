const express = require("express");
const router = express.Router();

// require Author model in order to use it for CRUD
const Author = require("../models/Author");

// ****************************************************************************************

// GET - to display the form for Creating the authors
router.get("/authors/new", (req, res, next) => {
  // make sure you see all the folders that are inside the "views" folder,
  // you don't have to specify "views" folder tho
  // in res.render() we don't use '/' 🚨 before we put the the path to the hbs file we want to render
  res.render("author-views/new-author");
});

// ****************************************************************************************

// POST route to create a new author in the DB
// the form is submitted from newnew author
{/* <form action="/authors/create" method="post"> */}
router.post("/authors/create", (req, res, next) => {
  //console.log("THE FORM: ", req.body);
  Author
    .create(req.body)     //Model method to save one document , our req.body satisfies schema so doc is created and saved
                          // take us to the page that already exist in our app
                          //    ^       ->  this is the URL so it HAS to start with '/', redirect points to url name not our hbs file name
                          //    |      |
                          //    |      |
    .then( newAuthor => res.redirect("/authors") )
    .catch(err => console.log("Error while creating a new author: ", err));
});

// ****************************************************************************************

// GET all authors from the DB
router.get("/authors", (req, res, next) => {
  Author
    .find()  //returns array of all our current author documents
    // renders our hbs file passing it in object to use as data
    .then(authorsFromDB => res.render("author-views/allAuthors", { authors: authorsFromDB }))
    .catch(err => console.log("Error while getting the authors from the DB: ", err));
});


// in order to use routes anywhere else in this application, we have to export them
module.exports = router;