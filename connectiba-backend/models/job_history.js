
const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/database');
const User = require('./user');
const Job = require('./job');
const Location = require('./location');


const Job_history = sequelize.define('Job_history', {
    history_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    start_date: {
        type: DataTypes.DATE,
    },
    end_date: {
        type: DataTypes.DATE,
    },
    employer_name: {
        type: DataTypes.STRING(255),
    },
    location_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Location,
            key: 'location_id',
        },
    },
    erp_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'erp_id',
        },
    },
    job_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Job,
            key: 'job_id',
        },
    },
}, {
    tableName: 'Job_histories',
    timestamps: true
});



module.exports = Job_history;