const express = require('express');
const app = express();
app.use(express.static('base'));

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.listen('3000', () => {
    console.log("did the thing");
});

//TODO: handle 404