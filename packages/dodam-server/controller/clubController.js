const util = require('../modules/util');
//const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const Club = require('../models/Clubs');
const User = require('../models/Users');
const fs = require('fs');
const moment = require('moment');
const { userInfo } = require('os');
const today = moment().startOf('day');

// 동아리 등록
const createClub = async (req, res) => {
  try {
    const {
      name,
      school,
      field,
      area,
      size,
      recruitStartDate,
      recruitEndDate,
      representContent,
      introduceContent,
    } = req.body;
    let representativeImage = await getFilePath(req, 'representativeImage');
    let logoImage = await getFilePath(req, 'logoImage');
    const userId = req.decoded.id;
    const clubValues = {
      name,
      field,
      school,
      area,
      size,
      recruitEndDate,
      recruitStartDate,
      representContent,
      introduceContent,
      representativeImage,
      logoImage,
      writer: userId,
    };
    const newClub = await Club.create(clubValues);
    return res.status(statusCode.OK).send(
      util.success(statusCode.OK, {
        newClub,
      })
    );
  } catch (err) {
    console.log(err);
    return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR));
  }
};

// 동아리 수정
const updateClub = async (req, res) => {
  try {
    const {
      clubId,
      name,
      school,
      field,
      area,
      size,
      recruitStartDate,
      recruitEndDate,
      representContent,
      introduceContent,
    } = req.body;
    const clubToEdit = await Club.findOne({ _id: clubId });
    fs.unlinkSync(`./${clubToEdit.representativeImage}`);
    fs.unlinkSync(`./${clubToEdit.logoImage}`);

    let representativeImage = await getFilePath(req, 'representativeImage');
    let logoImage = await getFilePath(req, 'logoImage');

    const userId = req.decoded.id;
    const updateValues = {
      name,
      field,
      school,
      area,
      size,
      recruitEndDate,
      recruitStartDate,
      representContent,
      introduceContent,
      representativeImage,
      logoImage,
      writer: userId,
    };
    const updateClub = await Club.updateOne(
      {
        _id: clubId,
      },
      {
        $set: updateValues,
      }
    );
    return res.status(statusCode.OK).send(
      util.success(statusCode.OK, {
        updateClub,
      })
    );
  } catch (err) {
    console.log(err);
    return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR));
  }
};

// 동아리 좋아요
const likeClub = async (req, res) => {
  try {
    const { clubId } = req.body;
    const userId = req.decoded.id;
    let userLikeData = await User.findOne({ _id: userId }, 'likesOfClub');
    const clubLikeData = await Club.findOne({ _id: clubId }, 'likes');
    const like = clubLikeData.likes;
    if (!userLikeData.likesOfClub.includes(clubId)) {
      userLikeData.likesOfClub.push(clubId);
      await Club.updateOne(
        {
          _id: clubId,
        },
        {
          $set: { likes: like + 1 },
        }
      );
      userLikeData.save();
      return res.status(statusCode.OK).send(
        util.success(statusCode.OK, {
          increaseLike: '동아리 스크랩 추가',
        })
      );
    } else {
      userLikeData.likesOfClub.pull(clubId);
      await Club.updateOne(
        {
          _id: clubId,
        },
        {
          $set: { likes: like - 1 },
        }
      );
      userLikeData.save();
      return res.status(statusCode.OK).send(
        util.success(statusCode.OK, {
          decreaseLike: '동아리 스크랩 제거',
        })
      );
    }
  } catch (err) {
    console.log(err);
    return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR));
  }
};

// 상위 랭크 동아리
const ranking = async (req, res) => {
  try {
    const rankClub = await Club.find({}).then((club) => {
      const clubs = club.map((rank) => {
        return [rank.name, rank.representativeImage];
      });
      return clubs;
    });
    return res.status(statusCode.CREATED).send(util.success(statusCode.OK, rankClub));
  } catch {
    return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR));
  }
};

// 현재 모집 중인 동아리
const recruitNow = async (req, res) => {
  try {
    const recruitClub = await Club.find({
      recruitStartDate: { $lt: today.toDate() },
      recruitEndDate: { $gt: today.toDate() },
    }).then((recruitclub) => {
      const recruitClubs = recruitclub.map((recruit) => {
        return [recruit.representativeImage, recruit.introduceContent];
      });
      return recruitClubs;
    });
    return res.status(statusCode.OK).send(util.success(statusCode.OK, recruitClub));
  } catch {
    return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR));
  }
};

// 내가 등록한 동아리
const myRegisterClub = async (req, res) => {
  try {
    const userId = req.decoded.id; // 현재 로그인한 사람의 _id
    const myRegisteredClub = await Club.find({ writer: userId }).then((myClub) => {
      const registeredClub = myClub.map((club) => {
        return [club.representativeImage, club.introduceContent, club.registerDate];
      });
      return registeredClub;
    });
    return res.status(statusCode.OK).send(util.success(statusCode.OK, myRegisteredClub));
  } catch {
    return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR));
  }
};

// 내가 좋아요 한 동아리
const myLikeClub = async (req, res) => {
  try {
    const userId = req.decoded.id;
    const likedClub = await User.find({ _id: userId }).then((user) => {
      const liked = user.map((club) => {
        return club.likesOfClub;
      });
      return liked;
    });
    return res.status(statusCode.OK).send(util.success(statusCode.OK, likedClub));
  } catch {
    return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR));
  }
};
const getFilePath = async (req, file) => {
  if (req.files[file]) {
    return req.files[file][0].path;
  } else {
    return undefined;
  }
};

module.exports = {
  createClub,
  updateClub,
  likeClub,
  ranking,
  recruitNow,
  myRegisterClub,
  myLikeClub,
};
