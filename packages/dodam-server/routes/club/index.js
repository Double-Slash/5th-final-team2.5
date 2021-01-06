const express = require('express');
const router = express.Router();
const clubController = require('../../controller/clubController');
const multer = require('multer');

const upload = multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, 'public/uploads/');
      },
      filename: function (req, file, cb) {
        cb(null, new Date().valueOf() + file.originalname);
      },
      limits: { fileSize: 5 * 1024 * 1024 }
    }),
  });
  const twoFieldUpload = upload.fields([{
      name: "representativeImage",
      maxCount: 1
    }, {
      name: "logoImage",
      maxCount: 1
    }]);


router.post('/createClub',twoFieldUpload, clubController.createClub);
router.put('/updateClub',twoFieldUpload, clubController.updateClub);
// router.post('/login', userController.login);




module.exports = router;
