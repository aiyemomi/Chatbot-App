const express = require('express');

const bodyParser = require('body-parser');

const ejs = require('ejs');

const path = require('path');

const mongoose  = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/views'));


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
res.render('home');
});

const port = 3000
app.listen(port, ()=>{
  console.log(`Server started on port ${port}`);
})
