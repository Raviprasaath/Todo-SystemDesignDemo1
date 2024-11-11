const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

const port = process.env.PORT || 5011;

app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
})