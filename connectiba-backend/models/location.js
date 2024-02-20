
const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/database');

const Location = sequelize.define('Location', {
    location_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    street: {
        type: DataTypes.STRING(100),
    },
    city: {
        type: DataTypes.STRING(100),
    },
    province: {
        type: DataTypes.STRING(100),
    },
    country: {
        type: DataTypes.STRING(100),
    },
    zip_code: {
        type: DataTypes.STRING(100),
    }
}, {

    tableName: 'locations',
    timestamps: true 
}
);


module.exports = Location;
