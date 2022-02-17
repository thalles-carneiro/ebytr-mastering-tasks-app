const express = require('express');
const cors = require('cors');

const { connection } = require('./models/db');
const taskRouter = require('./routers/taskRouter');
const errorHandler = require('./middlewares/errorHandler');

connection();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/tasks', taskRouter);

app.use(errorHandler);

module.exports = app;
