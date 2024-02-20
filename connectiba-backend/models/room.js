const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/database');

const Room = sequelize.define('Room', {
    room_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    room_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
},
    {
        tableName: 'rooms',
        timestamps: true,
    });

module.exports = Room;