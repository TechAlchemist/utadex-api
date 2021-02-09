const express = require('express');
const morgan = require('morgan');
const indexRouter = require('./routes/index');

const port = 3000;

const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(morgan('dev'));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.listen(port, () => console.log(`Port up and listening on port ${port}`));
