const { validationResult } = require('express-validator');
// const AuthModel = require('../../models/auth/auth');
const reviewsService = require('./../services/reviewsService');

class ReviewsController
{

    async videosReviewCreate(req, res, next)
    {
        try {
            const { refreshToken } = req.cookies;
            const data = await reviewsService.videosReviewCreate(req.body, refreshToken);

            return res.json(data);

        } catch (e) {
            next(e);
        }
    };
    async videosById(req, res, next)
    {
        try {
            const { id } = req.params;
            const data = await reviewsService.videosById(id);

            return res.json(data);

        } catch (e) {
            next(e);
        }
    };
    async videosAll(req, res, next)
    {
        try {
            const data = await reviewsService.videosAll();

            return res.json(data);

        } catch (e) {
            next(e);
        }
    };
    async jobsCompanyAll(req, res, next)
    {
        try {
            const data = await reviewsService.companyAll();

            data.forEach(company => {
                const len = company.dataValues.Reviews_Companies.length;
                if (len){
                    company.dataValues.rating = company.dataValues.Reviews_Companies.reduce((app, item) => {
                        app += Number(item.rating);
                        return app;
                    }, 0) / len;
                }
                company.dataValues.Reviews_Companies = company.dataValues.Reviews_Companies.length;
            })

            return res.json(data);

        } catch (e) {
            next(e);
        }
    };
    async companyAll(req, res, next)
    {
        try {
            const data = await reviewsService.companyAll();

            return res.json(data);

        } catch (e) {
            next(e);
        }
    };
    async reviewsAll(req, res, next)
    {
        try {
            const data = await reviewsService.reviewsAll();

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
