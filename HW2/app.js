const express = require('express');
const app = express();
require('dotenv').config;

app.get('/', (req, res) => {
    res.send('Got a Get request');
});

app.post('/', (req, res) => {
    res.send('Got a Post request');
});

app.put('/', (req, res) => {
    res.send('Got a put request');
});

app.listen(3000, () => console.log('Server running on port 3000'));