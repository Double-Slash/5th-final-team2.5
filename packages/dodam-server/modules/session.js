const session = require('express-session');
const session_key = require('../config/session.json');
// passport를 사용하여 로그인을 할 때는 세션을 사용
module.exports = (app) => {
  app.use(
    session({
      secret: session_key,
      cookie: { maxAge: 60 * 60 * 1000 },
      resave: false, // 세션을 언제나 저장을 할 것인 지
      saveUninitialized: true,
    })
  );
};
