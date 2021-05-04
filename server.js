const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = 3000;

require('dotenv').config();
require('./config/database');

const intakeRouter = require('./routes/api/intakes');
const surveyRouter = require('./routes/api/surveys');
const employeeRouter =  require('./routes/api/employees');
const authenticationRouter = require('./routes/api/authentication');
const locationRouter = require('./routes/api/locations');

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/api/intake', intakeRouter);
app.use('/api/survey', surveyRouter);
app.use('/api/employee', employeeRouter);
app.use('/api/auth', authenticationRouter);
app.use('/api/location', locationRouter);

app.listen(port, () => console.log(`Port up and listening on port ${port}`));
