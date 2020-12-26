const util = require('../modules/util');
const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const User = require('../models/Users');
const bcrypt = require('bcryptjs');
const jwt = require('../modules/jwt');

function isMobile(phoneNum) {
  let regExp = /(01[016789])([1-9]{1}[0-9]{2,3})([0-9]{4})$/;
  if (regExp.test(phoneNum)) {
    //myArray = regExp.exec(phoneNum);
    return true;
  } else {
    console.log('잘못된 형식의 전화번호입니다.');
    return false;
  }
}

module.exports = {
  // 회원가입
  signup: async (req, res) => {
    try {
      const { id, password, name, birth, phonenumber } = req.body;
      if (!id || !password || !name || !birth || !phonenumber) {
        console.log('필수 입력 누락');
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
      }
      const alreadyid = await User.findOne({ id: id }).lean();
      if (alreadyid) {
        console.log('이미 있는 아이디');
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.ALREADY_ID));
      }

      let myArray;
      let rtnNum;
      if (isMobile(phonenumber)) {
        const regExp = /(01[016789])([1-9]{1}[0-9]{2,3})([0-9]{4})$/;
        if (regExp.test(phonenumber)) {
          myArray = regExp.exec(phonenumber);
          rtnNum = myArray[1] + '-' + myArray[2] + '-' + myArray[3];
        }
      }
      const salt = await bcrypt.genSalt(10);
      const hashedpw = await bcrypt.hash(password, salt);
      const user = await User.create({
        id,
        password: hashedpw,
        name,
        birth,
        phonenumber: rtnNum,
      }); // 생성하려는 유저 객체 하나
      console.log('생성하려는 유저객체' + user);
      return res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, responseMessage.SIGN_IN_SUCCESS));
    } catch (err) {
      console.error(err);
      return res
        .status(statusCode.INTERNAL_SERVER_ERROR)
        .send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.SIGN_IN_FAIL));
    }
  },

  // 로그인
  login: async (req, res) => {
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
      if (checkPw != true) {
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
  },
};
