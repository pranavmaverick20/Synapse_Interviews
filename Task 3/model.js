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
        required: [true, "Please enter gender"]
    },
    availability: {
        type: Boolean,
        required: [true, "Please Enter ID"]
    }

});
const Library = mongoose.model("Library", LibrarySchema);
module.exports = Library;