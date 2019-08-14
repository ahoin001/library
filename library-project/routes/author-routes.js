const express = require("express");
// TODO: Is this what allows us to export all these router paths to app.js?
const router = express.Router();

// require Author model in order to use it and its methods for CRUD
const Author = require("../models/Author");

// GET - to display the form for Creating the authors
router.get("/authors/new", (req, res, next) => {
  // make sure yoy see all the folders that are inside the "views" folder,
  // you don't have to specify "views" folder tho
  res.render("author-views/new-author");
});

router.get("/authors", (req, res, next) => {
  Author
    // returns array of authors
    .find()
    // authors: authorsFromDB  is array of author documents(objects) we pass in for the hbs file to use
    .then((authorsFromDB) => {
      console.log('-------------------------------', authorsFromDB);
      res.render("author-views/all-authors", { authors: authorsFromDB });
    })

    .catch(err => console.log(`Error while getting authors from the DB: `, err))

})

// post route to create a new author in the DB
{/* <form action="/authors/create" method="post"> */ }
router.post("/authors/create", (req, res, next) => {
  // console.log("THE FORM: ", req.body);
  Author
    .create(req.body)
    .then( newAuthor => {
      console.log("NEW AUTHOR: ", newAuthor)
      console.log('________LIST IF AUTHORS__________________');
      Author
      .find()
      .then((authorsFromDB) => {
        console.log('-------------------------------', authorsFromDB);
        res.render("author-views/all-authors", { authors: authorsFromDB });
      })

    })

    .catch(err => console.log("Error while creating a new author: ", err));

});




// in order to use routes anywhere else in this application, we have to export them
module.exports = router;