const express = require('express');
const app = express();

app.get('/list', (req, res) => {
    res.send([{
        id: 1,
        title: "Front End System Design"
    }])
})

const port = env.process.PORT || 5001;

app.listen(port, () => {
    console.log('server running ' + port);
})