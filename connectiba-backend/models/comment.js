const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/database');
const Post = require('./post');
const User = require('./user');

const Comment = sequelize.define('Comment', {
    comment_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Post,
            key: 'post_id'
        },
    },
    erp_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'erp_id'
        }
    },
}, {
    tableName: 'comments',
    timestamps: true,
});


module.exports = Comment;