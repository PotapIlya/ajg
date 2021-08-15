const { Users, AuthToken, Companies, Positions, Reviews_Companies, Videos_Reviews, Videos } = require('./index')

module.exports = {

    belongsToAuthTokenUser: AuthToken.belongsTo(Users),

    hasManyCompanyPositions: Companies.hasMany(Positions),
    hasManyCompanyReviews: Companies.hasMany(Reviews_Companies),

    hasManyVideosReviews: Videos.hasMany(Videos_Reviews),

    hasOneReviewsCompany: Reviews_Companies.belongsTo(Companies),
    hasOneReviewsPosition: Reviews_Companies.belongsTo(Positions),
    hasOneReviewsUser: Reviews_Companies.belongsTo(Users),

    // belongToManyRoomUser: Room.belongsToMany(Users, {
    //     through: UserRoom,
    //     as: 'room_user'
    // }),
    // belongToManyUserRoom: Users.belongsToMany(Room, {
    //     through: UserRoom,
    //     as: 'user_room'
    // }),

}
