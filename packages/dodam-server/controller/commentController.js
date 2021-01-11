const util = require('../modules/util');
const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const Club = require('../models/Clubs');
const Comment = require('../models/Comment');
const Reply = require('../models/Reply');

// 동아리 등록
const createComment = async (req, res) => {
    try {
        const {clubId,comment} = req.body;
        if(!clubId||!comment){
            return res.status(statusCode.BAD_REQUEST).send(
                util.fail(statusCode.BAD_REQUEST,responseMessage.NULL_VALUE
                )
            );
        }
        const userId = req.decoded.id;

        const newComment = await Comment.create({
            writer:userId,
            clubId,
            comment
        })

        return res.status(statusCode.OK).send(
            util.success(statusCode.OK, {
            newComment
            })
        );
    } catch (err) {
        console.log(err);
        return res
            .status(statusCode.INTERNAL_SERVER_ERROR)
            .send(util.fail(statusCode.INTERNAL_SERVER_ERROR))
    }
};

const createReply = async (req, res) => {
    try {
        const {clubId,reply,commentId} = req.body;
        if(!clubId||!reply||!commentId){
            return res.status(statusCode.BAD_REQUEST).send(
                util.fail(statusCode.BAD_REQUEST,responseMessage.NULL_VALUE
                )
            );
        }
        const userId = req.decoded.id;

        const newReply = await Reply.create({
            writer:userId,
            clubId,
            reply,
            commentId
        })

        return res.status(statusCode.OK).send(
            util.success(statusCode.OK, {
            newReply
            })
        );
    } catch (err) {
        console.log(err);
        return res
            .status(statusCode.INTERNAL_SERVER_ERROR)
            .send(util.fail(statusCode.INTERNAL_SERVER_ERROR))
    }
}


module.exports = {
    createComment,
    createReply,
};
