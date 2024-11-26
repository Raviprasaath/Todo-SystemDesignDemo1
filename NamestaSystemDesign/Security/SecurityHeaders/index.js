const express = require('express');
const app = express();

const redirectToHttps = (req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https') {
        // Redirect to https
        return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }
    next();
}

app.use(redirectToHttps);

const PORT = 5000;

// header control for security
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