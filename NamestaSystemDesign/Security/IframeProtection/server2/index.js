const express = require('express');
const app = express();

// Serve static files (optional)
app.use(express.static('public'));

// Define your routes
app.get('/iframe-website1', (req, res) => {
    res.sendFile(__dirname + '/public/iframe-website1.html');
})

app.get('/iframe-website2', (req, res) => {
    res.sendFile(__dirname + '/public/iframe-website2.html');
})

const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log(`Server running on the port ${port}`);
})