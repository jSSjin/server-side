const express = require('express');
const app = express();


app.get('/', (req, res) => {
    console.log(req.query)
    res.send(req.query.name + ' ' + req.query.age)
});

app.post('/', (req, res) => {
    res.send('Got a Post request');
});

app.put('/', (req, res) => {
    res.send('Got a put request');
});

app.listen(3000, () => console.log('Server running on port 3000'));