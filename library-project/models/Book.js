const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({

    title: String,
    description: String,
    rating: Number,
    imageUrl: String,
    author: {
        // in author property of each book model, an objectID is saved that will belong to the author model
        type: Schema.Types.ObjectId,
        ref:"Author"
    }

},
{
    // keep record of when created and updated
    timestamps: true
});

// Assign Schema to Author then export if for use in other files
const Book = mongoose.model("Book",bookSchema);
module.exports = Book;