const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { clientID, clientPW, URL } = require('../config/google.json');

module.exports = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());

  // 로그인 성공할 때 호출된다.
  passport.serializeUser((user, done) => {
    done(null, user); // done이 호출되면 사용자의 정보가 user를 통해 세션에 저장되고,
    //두번째 인자 user가 deserializeUser로 전달된다.
  }); // user --> 소셜 로그인 성공한 사용자의 프로필 정보

  // 서버에 요청이 있을 때마다 호출된다.
  passport.deserializeUser((user, done) => {
    done(null, user); // ** req.user로 user의 값에 접근가능
  });

  passport.use(
    new GoogleStrategy(
      {
        clientID: clientID,
        clientSecret: clientPW,
        callbackURL: URL,
      },
      function (accessToken, refreshToken, profile, done) {
        done(null, profile);
      }
    )
  );
};
