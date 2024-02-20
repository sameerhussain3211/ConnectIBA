const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/database');

const Job = sequelize.define('Job', {
    job_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    job_title: {
        type: DataTypes.STRING(255),
        allowNull: false 
    },
    job_description: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
}, {

    tableName: 'jobs',
    timestamps: true 
});

module.exports = Job;