var express = require('express');
var router = express.Router();
var resultController = require('../controllers/resultController');

/* GET users listing. */
router.get('/', resultController.result_get);

module.exports = router;
