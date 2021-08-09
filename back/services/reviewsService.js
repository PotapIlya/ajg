const { Companies, Positions, Reviews } = require('./../database/schema/index');
// const x = require('./../database/schema/connections')
const tokenService = require('./../services/auth/tokenService')

class reviewsService
{
    async companyAll()
    {
        return await Companies.findAll();
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
        return await Reviews.create({
            UserId: tokenService.validateRefreshToken(token).id,
            CompanyId: data.companyId,
            PositionId: data.positionId,
            rating: data.inputRating,
            text: data.textReviews,
        });
    };

}

module.exports = new reviewsService();