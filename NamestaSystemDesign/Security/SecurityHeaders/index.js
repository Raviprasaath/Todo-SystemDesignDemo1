const express = require('express');
const app = express();

const PORT = 5010;

app.use((req, res, next) => {
    res.setHeader('Referrer-Policy', 'origin');
    res.removeHeader('X-Powered-By');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    next();
})

app.get('/list', (req, res) => {
    res.send([{
        id: 1,
        title: 'System Design'
    }])
})

app.listen(PORT, ()=>{
    console.log('Server running on '+PORT);
})