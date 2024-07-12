require('dotenv').config();
console.log(process.env.PORT);

const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(8080);

app.get('/', (req, res) => {
    // res.send('<p>home page</p>');
    res.sendFile('./index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    // res.send('<p>about page</p>');
    res.sendFile('./about.html', { root: __dirname });
});

app.get('/contact', (req, res) => {
    // res.send('<p>about page</p>');
    res.sendFile('./contact.html', { root: __dirname });
});

