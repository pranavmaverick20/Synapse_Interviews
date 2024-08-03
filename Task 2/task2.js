const express = require('express');
const app = express();

//this method is to parse json values

app.use(express.json());

//this function is to generate password

const passwordGenerate = (numbers, capital, special, len) => {
    let str = "qwertyuiopasdfghjklzxcvbnm";
    if (numbers) {
        str += "1234567890";
    }
    if (capital) {
        str += "QWERTYUIOPASDFGHJKLZXCVBNM";
    }
    if (special) {
        str += "!@#$%^&*()_+-=[]{}|;:',.<>/?`~";

    }
    let pass = "";
    for (i = 0; i < len; i++) {
        pass += str[Math.floor(Math.random() * str.length)];
    }
    return pass;
};

// Using a Get request to generate password and return JSON response

app.get('/api/password', (req, res) => {
    try {
        const { numbers, capital, special, len } = req.body;
        res.status(200).json({ success: true, Password: passwordGenerate(numbers, capital, special, Number(len)) });
    }
    catch (err) {
        res.status(500).json({ success: false, data: err.message });
    }
});

//This is bonus task

const pat = require("./methods.js");

app.get('/api/pattern/:a/:b', (req, res) => {
    try {
        const { a, b } = req.params;
        res.status(200).json({ success: true, data: pat(Number(a), Number(b)) })
    }
    catch (err) {
        res.status(500).json({ success: false, data: err.message });
    }

});






app.listen(5000, () => {
    console.log("Server is listening on port 5000...");
})

