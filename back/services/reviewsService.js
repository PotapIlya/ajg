const {
    Companies, Positions, Reviews_Companies,
    Videos, Videos_Reviews
} = require('./../database/schema/index');
const {
    hasManyCompanyPositions, hasManyCompanyReviews, hasOneReviewsCompany,
    hasOneReviewsPosition, hasOneReviewsUser,
    hasManyVideosReviews

} = require('./../database/schema/connections');
const tokenService = require('./../services/auth/tokenService');
const apiError = require('./../exeptions/apiError');

class reviewsService
{

    async videosReviewCreate(data, token)
    {
        return await Videos_Reviews.create({
            'UserId': tokenService.validateRefreshToken(token).id,
            'VideoId': data.videoId,
            'rating': data.inputRating,
            'text': data.reviewInput,
        })
    };
    async videosById(id)
    {
        return await Videos.findByPk(id, {
            include: hasManyVideosReviews,
        });
    };
    async videosAll()
    {
        return await Videos.findAll();
    };
    async companyAll()
    {
        return await Companies.findAll({
            include: hasManyCompanyReviews
        });
    };
    async reviewsAll()
    {
        return await Reviews_Companies.findAll({
            include: [
                hasOneReviewsCompany,
                hasOneReviewsPosition,
                hasOneReviewsUser
            ]
        });
       // return await Companies.findAll({
       //      include: [hasManyCompanyPositions, hasManyCompanyReviews]
       //  })
    };

    async companyId(id)
    {
        return await Positions.findAll({
            where: {
                'CompanyId': id
            }
        });
    };

     async create(data, token)
    {
        if ( data.newCompanyInput )
        {
            const company = await Companies.create({'name': data.newCompanyInput})

            if ( data.newPositionInput ){
                const position = await Positions.create({
                    'CompanyId': company.id,
                    'name' : data.newPositionInput,
                });
                data.companyId = company.id;
                data.positionId = position.id;

            } else {
                throw apiError.badRequest('Вы не выбрали должность')
            }
        }

        if ( data.newPositionInput && !data.newCompanyInput ) {
            if (data.companyId){
                const position = await Positions.create({
                    'CompanyId': data.companyId,
                    'name' : data.newPositionInput,
                });
                data.positionId = position.id;

            } else{
                throw apiError.badRequest('Вы не выбрали компанию')
            }
        }

        return await Reviews_Companies.create({
            'UserId': tokenService.validateRefreshToken(token).id,
            'CompanyId': data.companyId,
            'PositionId': data.positionId,
            'rating': data.inputRating,
            'text': data.textReviews,
        });
    };
}

module.exports = new reviewsService();