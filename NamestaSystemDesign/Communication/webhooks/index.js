const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Webhook endpoint
app.post("/webhook", (req, res) => {
    const payload = req.body;

    // Extract the payload from the incoming POST request
    console.log("Received webhook payload");

    // Optionally, send a response to the sender to acknowledge the receipt
    res.status(200).send("Webhook received successfully");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})