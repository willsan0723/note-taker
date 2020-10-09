const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const index = require('./public/js/index')
app.use(express.json());
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
})
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
})

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});