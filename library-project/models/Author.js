const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    // only need type if more than one property defined
    firstName: { type: String },
    lastName: { type: String },
    nationality: { type: String },
    birthday: Date,
    imageUrl: {
        type: String,
        default: "https://thumbs-prod.si-cdn.com/ufPRE9RHUDHqQdOsLvYHhJAxy1k=/fit-in/1600x0/https://public-media.si-cdn.com/filer/91/91/91910c23-cae4-46f8-b7c9-e2b22b8c1710/lostbook.jpg"
    }

},
    {
        // keep record of when created and updated
        timestamps: true
    });

// Assign Schema to Author then export if for use in other files
// TODO ",authorSchema"
const Author = mongoose.model("Author");
module.exports = Author;