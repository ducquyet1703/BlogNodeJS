const morgan = require('morgan')
const express = require('express');
const { engine } = require ('express-handlebars');
const  path = require('path');
const route = require('./routes')
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// HTTP Logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});