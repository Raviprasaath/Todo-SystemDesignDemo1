const express = require('express');
const PORT = 5000;

const app = express();

app.use((req, res, next)=> {
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self';" + 
        "script-src 'self' 'nonce-randomKey' 'unsafe-inline' http://unsecure.com"
    )
    next();
})

app.use(express.static('public'));

app.get('/', (req, res)=> {
    res.send(__dirname + '/public/index.html')
})

app.listen(PORT, ()=> {
    console.log('Port running on', PORT);
})