const express = require('express');
const app = express();

// serve static files (optional)
// app.use(express.static('public'));

// Define your routes
app.get('/example1', (req, res) => {
    console.log('check')
    res.sendFile(__dirname + '/public/example1.html');
});

app.get('/example2', (req, res) => {
    res.sendFile(__dirname + '/public/example2.html');
});

app.get('/example3', (req, res) => {
    res.sendFile(__dirname + '/public/example3.html');
});

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log('Port running in '+ port);
})