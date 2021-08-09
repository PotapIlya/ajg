const { Users, AuthToken, Companies, Positions, Reviews } = require('./index')

module.exports = {

    belongsToAuthTokenUser: AuthToken.belongsTo(Users),

    hasManyCompanyPositions: Companies.hasMany(Positions),
    hasManyCompanyReviews: Companies.hasMany(Reviews),
    // belongToManyRoomUser: Room.belongsToMany(Users, {
    //     through: UserRoom,
    //     as: 'room_user'
    // }),
    // belongToManyUserRoom: Users.belongsToMany(Room, {
    //     through: UserRoom,
    //     as: 'user_room'
    // }),

}
