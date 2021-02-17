const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = 3000;

require('dotenv').config();
require('./config/database');

const intakeRouter = require('./routes/api/intake');

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/api/intake', intakeRouter);


app.listen(port, () => console.log(`Port up and listening on port ${port}`));
