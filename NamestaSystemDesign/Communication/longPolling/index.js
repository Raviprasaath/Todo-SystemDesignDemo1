const express = require('express');
const app = express();
let data = 'Initial Data';
const waitingClient = [];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/getData', (req, res) => {
    if (data !== req.query.lastData) {
        res.json({ data });
    } else {
        waitingClient.push(res);
    }
});

// use post/put to update
app.get('/updateData', (req, res) => {
    data = req.query.data;

    while(waitingClient.length > 0) {
        const client = waitingClient.pop();
        client.json({ data });
    }

    res.send({ success: 'Data updated done' })
})

const port = process.env.PORT || 5011;

app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
})