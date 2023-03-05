require('dotenv').config();

let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let mongoose = require("mongoose")
let cors = require('cors')

//Define routes
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let postsRouter = require("./routes/posts");

let app = express();

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

app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }))

//Use routes
app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/posts', postsRouter);

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

module.exports = app;
