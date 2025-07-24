const express = require("express");
const app = express();

app.get('/hello', (req, res) => {
    res.json({message: "hello from express.js"})
});

app.listen(3000, () => {
    console.log("server running on port 3000")
});