const express = require('express');
const router = express();
const { body } = require('express-validator')
const reviewsController = require('../controllers/reviewsController');


router.get('/company/all', reviewsController.companyAll );


router.post('/position/companyId', reviewsController.companyId );

router.post('/reviews/create', reviewsController.create );

module.exports = router;

