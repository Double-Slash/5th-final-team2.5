const isMobile = async (phoneNum) => {
  const regExp = /(01[016789])([1-9]{1}[0-9]{2,3})([0-9]{4})$/;
  if (regExp.test(phoneNum)) {
    return true;
  } else {
    console.log('잘못된 형식의 전화번호입니다.');
    return false;
  }
};

module.exports = {
  isMobile,
};
