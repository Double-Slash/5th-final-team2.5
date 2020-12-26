const jwt = require('jsonwebtoken');
const { secretKey, options } = require('../config/jwtKey.json');
const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;

module.exports = {
  sign: async (user) => {
    const payload = {
      id: user._id,
      name: user.name,
      phonenumber: user.phonenumber,
    }; // token에 암호화되어 저장되는 값
    const token = jwt.sign(payload, secretKey, options);
    return token;
  },
  verify: async (token) => {
    let decoded;
    try {
      decoded = jwt.verify(token, secretKey); // 결국 decoded 변수에 payload가 담기는 꼴
    } catch (err) {
      if (err.message === 'jwt expired') {
        console.log('expired token');
        return TOKEN_EXPIRED;
      } else {
        console.log('invalid token');
        return TOKEN_INVALID;
      }
    }
    return decoded;
  },
};
