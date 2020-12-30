const util = require('../modules/util');
const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const User = require('../models/Users');
const bcrypt = require('bcryptjs');
const jwt = require('../modules/jwt');

// 회원가입
const signup = async (req, res) => {
  try {
    const { id, password, name, birth, phonenumber } = req.body;
    if (!id || !password || !name || !birth || !phonenumber) {
      return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }

    const salt = await bcrypt.genSalt(10);
    const hashedpw = await bcrypt.hash(password, salt);
    const user = await User.create({
      id,
      password: hashedpw,
      name,
      birth,
      phonenumber: phonenumber,
    });
    return res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, responseMessage.SIGN_UP_SUCCESS, user));
  } catch (err) {
    return res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.SIGN_UP_FAIL));
  }
};

// 로그인
const login = async (req, res) => {
  try {
    const { id, password } = req.body;
    if (!id || !password) {
      console.log('필요 입력 누락');
      return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
    const checkId = await User.findOne({
      id,
    }).lean();
    if (!checkId) {
      console.log('없는 아이디');
      return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    }
    const checkPw = await bcrypt.compare(password, checkId.password);
    if (checkPw) {
      console.log('비밀번호 불일치');
      return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.OK, responseMessage.MISS_MATCH_PW));
    }

    const { _id, name, birth, phonenumber } = checkId; // 로그인하려는 사용자의 정보 중 일부만 추출
    const token = await jwt.sign(checkId);
    return res.status(statusCode.OK).send(
      util.success(statusCode.OK, responseMessage.SIGN_IN_SUCCESS, {
        token,
        user: { id: _id, name, birth, phonenumber },
      })
    );
  } catch (err) {
    console.log(err);
    return res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.SIGN_IN_FAIL));
  }
};

module.exports = {
  signup,
  login,
};
