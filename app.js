const express = require('express');

const app = express();
const port = 3000;

//ejs template engine
app.set('view engine', 'ejs');


// static files middleware
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});



