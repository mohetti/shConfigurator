let express = require('express');
let router = express.Router();
let resultController = require('../controllers/resultController');

/* GET users listing. */
router.post('/', resultController.result_get);

module.exports = router;
