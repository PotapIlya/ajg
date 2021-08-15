const { Sequelize, DataTypes, Model }  = require('sequelize');
const connect = require('../../core/connectDatabase');

const sequelize = connect.sequelize;

module.exports = {

    Users: connect.sequelize.define('Users', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        timestamps: true,
        sequelize,
        modelName: 'Users',
    }),

    AuthToken: connect.sequelize.define('AuthToken', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.DataTypes.INTEGER
        },
        UserId: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
        },
        token: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: true
    }),

    Companies: connect.sequelize.define('Companies', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: true
    }),

    Positions: connect.sequelize.define('Positions', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.DataTypes.INTEGER
        },
        CompanyId: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: true
    }),

    Reviews_Companies: connect.sequelize.define('Reviews_Companies', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.DataTypes.INTEGER
        },
        UserId: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
        },
        CompanyId: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
        },
        PositionId: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
        },
        rating: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: true
    }),

    Videos: connect.sequelize.define('Videos', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        src: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: true
    }),

    Videos_Reviews: connect.sequelize.define('Videos_Reviews', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.DataTypes.INTEGER
        },
        UserId: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
        },
        VideoId: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
        },
        rating: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: true
    }),




};

