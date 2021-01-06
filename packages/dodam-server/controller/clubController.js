const util = require('../modules/util');
const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const Club = require('../models/Clubs');
const fs = require('fs');

// 동아리 등록
const createClub = async (req, res) => {
    try {
        const {
            name, school, field, area, size,
            recruitStartDate, recruitEndDate,
            representContent, introduceContent,
        } = req.body;
        if (!name || !school || !field || !area || !size || !recruitStartDate || !recruitEndDate || !representContent || !introduceContent) {
            return res.status(statusCode.BAD_REQUEST).send(
                util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE
                )
            );
        }
        let representativeImage = "";
        let logoImage = "";
        if (req.files ? req.files['representativeImage'] : false) {
            representativeImage = req.files['representativeImage'][0].path;
        }
        if (req.files ? req.files['logoImage'] : false) {
            logoImage = req.files['logoImage'][0].path;
        }
        const userId = req.decoded.id;
        const newClub = await Club.create(
            {
                name, field, school, area, size, recruitEndDate, recruitStartDate,
                representContent, introduceContent,
                representativeImage, logoImage,
                writer: userId
            }
        );
        return res.status(statusCode.OK).send(
            util.success(statusCode.OK, {
                newClub

            })
        );
    } catch (err) {
        console.log(err);
        return res
            .status(statusCode.INTERNAL_SERVER_ERROR)
            .send(util.fail(statusCode.INTERNAL_SERVER_ERROR))
    }
};
const updateClub = async (req, res) => {
    try {
        const {
            clubId,
            name, school, field, area, size,
            recruitStartDate, recruitEndDate,
            representContent, introduceContent,
        } = req.body;
        if (!name || !school || !field || !area || !size || !recruitStartDate || !recruitEndDate || !representContent || !introduceContent) {
            return res.status(statusCode.BAD_REQUEST).send(
                util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE
                )
            );
        }
        const clubToEdit = await Club.findOne({_id:clubId});
        fs.unlinkSync(`./${clubToEdit.representativeImage}`);
        fs.unlinkSync(`./${clubToEdit.logoImage}`);
        

        let representativeImage = "";
        let logoImage = "";
        if (req.files ? req.files['representativeImage'] : false) {
            representativeImage = req.files['representativeImage'][0].path;
        }
        if (req.files ? req.files['logoImage'] : false) {
            logoImage = req.files['logoImage'][0].path;
        }
        const userId = req.decoded.id;
        const updateClub = await Club.update(
            {
                _id: clubId
            },
            {
                $set:{
                    name, field, school, area, size, recruitEndDate, recruitStartDate,
                    representContent, introduceContent,
                    representativeImage, logoImage,
                    writer: userId
                } 
            }
        
        );
        return res.status(statusCode.OK).send(
            util.success(statusCode.OK, {
                updateClub

            })
        );
    } catch (err) {
        console.log(err);
        return res
            .status(statusCode.INTERNAL_SERVER_ERROR)
            .send(util.fail(statusCode.INTERNAL_SERVER_ERROR))
    }
};

module.exports = {
    createClub,
    updateClub

};
