const express = require("express");
const dogApiController = require("../controllers/dogApiController");
const router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/search-pictures', dogApiController.getPicturesByBreed);
router.get('/search-breeds', dogApiController.getAllBreeds);

module.exports = router;
