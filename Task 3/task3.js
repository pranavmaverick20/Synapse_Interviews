//mongodb+srv://Synapse_Task3:Synapse_Task3@synapse.hkhw2ba.mongodb.net/?retryWrites=true&w=majority&appName=Synapse
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Library = require('./model.js')

//to parse JSON values

app.use(express.json());

app.post('/api/book', async (req, res) => {
    try {
        data = req.body;
        const book = await Library.create(data);
        res.status(200).json({ success: true, data: book });
    }
    catch (err) {
        res.status(500).send({ success: false, msg: "Failure" });
    }
});

app.put('/api/book/:sid', async (req, res) => {
    try {
        const { name, genre, availability } = req.body;
        const book = await Library.findOne({ id: req.params.sid });
        const newBook = await Library.findByIdAndUpdate(book._id, { name: name, genre: genre, availability: availability }, { new: true });
        res.status(200).json({ success: true, data: newBook });
    }
    catch (err) {
        res.status(500).send({ success: false, msg: "Failure" });
    }

});

app.get('/api/books', async (req, res) => {
    try {
        const data = await Library.find({});
        res.status(200).json({ success: true, data: data });
    }
    catch (err) {
        res.status(500).send({ success: false, msg: "Failure" });
    }
});

app.delete('/api/book/:id', async (req, res) => {
    try {
        const book = await Library.findOne({ id: req.params.id });
        await Library.findByIdAndDelete(book._id);
        res.status(200).json({ success: true, data: book, msg: "Deleted" });
    }
    catch (err) {
        res.status(500).send({ success: false, msg: "Failure" });
    }
});




(async () => {
    try {
        await mongoose.connect("mongodb+srv://Synapse_Task3:Synapse_Task3@synapse.hkhw2ba.mongodb.net/?retryWrites=true&w=majority&appName=Synapse");
        console.log("Connected to DB!");
        app.listen(5000, () => {
            console.log("Server listening on port 5000");

        });
    }
    catch (error) {
        console.log("Failed to connect");
    }
})();





