import express from 'express';

const app = express();

const PORT = 4521;

app.all('/', (req, res)=> {
    res.send('Im Ups')
})

app.listen(PORT, ()=> {
    console.log(`App is running in PORT ${PORT}`)
});

