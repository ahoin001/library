const express = require("express");
const router = express.Router();

// require author model to use it for crud
const Author = require("../models/Author");

// GET - to display the form for creating the authors
router.get("/author/new", (req, res, next) => {
    res.render("author-views/new-author");
})

module.exports = router;