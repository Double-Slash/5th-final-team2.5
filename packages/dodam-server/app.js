const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

//Database
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
const { pw } = require('./config/mongoAtlaspw.json');

mongoose
  .connect(`mongodb+srv://jaemin:${pw}@cluster0.s1i8h.mongodb.net/Final-Project?retryWrites=true&w=majority`)
  .then((db) => {
    console.log(db); // 선언된 변수가 사용되지 않으면 eslint에 위배..?
    console.log('Mongodb connected');
  })
  .catch((err) => console.log(err));

// 세션 세팅
const configureSession = require('./modules/session');
configureSession(app);

// passport 세팅
const configurePassport = require('./modules/passport');
configurePassport(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
