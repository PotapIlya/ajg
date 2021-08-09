const { validationResult } = require('express-validator');
// const AuthModel = require('../../models/auth/auth');
const reviewsService = require('./../services/reviewsService');

class ReviewsController
{
    async companyAll(req, res, next)
    {
        try {
            const data = await reviewsService.companyAll();

            return res.json(data);

        } catch (e) {
            next(e);
        }
    };
    async companyId(req, res, next)
    {
        try {
            const { companyId } = req.body;
            const data = await reviewsService.companyId(companyId);

            return res.json(data);

        } catch (e) {
            next(e);
        }
    };
    async create(req, res, next)
    {
        try {
            const { refreshToken } = req.cookies;
            const data = await reviewsService.create(req.body, refreshToken);

            return res.json(data);

        } catch (e) {
            next(e);
        }
    }

}


module.exports = new ReviewsController();
