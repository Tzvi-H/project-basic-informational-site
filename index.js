require('dotenv').config()
const path = require('path');
const express = require('express')
const app = express('app')


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact-me', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact-me.html'));
});

app.use((req, res) => {
    res.statusCode = 404
    res.sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})