const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/database');
const Room  = require('./room');
const User = require('./user');

const RoomMember = sequelize.define('RoomMember', {
    room_member_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    join_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    room_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    erp_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},
    {
        tableName: 'room_members',
        timestamps: true,
    });

RoomMember.belongsTo(Room, { foreignKey: 'room_id' });
RoomMember.belongsTo(User, { foreignKey: 'erp_id' });

module.exports = RoomMember;