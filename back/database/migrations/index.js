const connect  = require('../../core/connectDatabase');
const {  Users, Reviews, Companies, AuthToken, Positions }= require('../schema/index');


console.log('START MIGRATIONS');

const {
    belongsToAuthTokenUser,
    hasManyCompanyPositions,
    hasManyCompanyReviews,
    hasManyVideosReviews,
    hasOneReviewsCompany,
    hasOneReviewsPosition,
    hasOneReviewsUser,

} = require('../schema/connections')

connect.sequelize.sync({force:true}).then(()=>
{
    console.log("Tables have been created\n");
    console.log('END MIGRATIONS\n');
})
.catch(err=>{
    console.log(err)
});
