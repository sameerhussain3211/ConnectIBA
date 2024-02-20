
const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/database');
const Post = require('./post');
const User = require('./user');

const Like = sequelize.define('Like', {
    like_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
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
    tableName: 'likes',
    timestamps: true,
});


// /ECAUSE ERROR

// Post.hasMany(Like, { foreignKey: 'post_id', sourceKey: 'post_id' });

// Like.belongsTo(Post, { foreignKey: 'post_id', targetKey: 'post_id' });


module.exports = Like;
