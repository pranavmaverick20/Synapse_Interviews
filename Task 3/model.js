const mongoose = require('mongoose');
const LibrarySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter name"]
    },
    id: {
        type: String,
        required: [true, "Please enter ID"]
    },
    genre: {
        type: String,
        required: [true, "Please enter genre"]
    },
    availability: {
        type: Boolean,
        required: [true, "Please Enter status"]
    }

});
const Library = mongoose.model("Library", LibrarySchema);
module.exports = Library;