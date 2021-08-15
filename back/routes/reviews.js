const express = require('express');
const router = express();
const { body } = require('express-validator')
const reviewsController = require('../controllers/reviewsController');


router.get('/reviews/all', reviewsController.reviewsAll );
router.get('/company/all', reviewsController.companyAll );

router.get('/jobs/company/all', reviewsController.jobsCompanyAll );

router.get('/videos/all', reviewsController.videosAll );
router.get('/videos/:id', reviewsController.videosById );
router.post('/videos/review/create', reviewsController.videosReviewCreate );


router.post('/position/companyId', reviewsController.companyId );

router.post('/reviews/create', reviewsController.create );

module.exports = router;

