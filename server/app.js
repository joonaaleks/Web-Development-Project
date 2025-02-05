require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');

//Define routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const postsRouter = require("./routes/posts");

const app = express();

//Make connection to the database
async function database() {
    const mongoDB = "mongodb://127.0.0.1:27017/project";
    await mongoose.connect(mongoDB);
    mongoose.Promise = Promise;
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error"));
}
//Start database
database().catch(err => console.log(err));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({ origin: `http://127.0.0.1:3000`, optionsSuccessStatus: 200 }))

//Use routes
app.use('/', indexRouter);
app.use('/api', usersRouter);
app.use('/api', postsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
});


app.listen(5000, () => {
    console.log(`Server running on http://127.0.0.1:5000`);
});

module.exports = app;
