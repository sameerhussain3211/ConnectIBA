
const Like = require('./like');
const Room = require('./room');
const User = require('./user');
const Comment = require('./comment');

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../utilities/database');

const Post = sequelize.define('Post', {
    post_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING(100),
    },
    content: {
        type: DataTypes.TEXT,
    },
    media: {
        type: DataTypes.BLOB('long'),
    },
    room_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Room,
            key: 'room_id',
        },
    },
    posted_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'erp_id',
        },
    },
}, {
    tableName: 'posts',
    timestamps: true,
});



Post.hasMany(Comment, { foreignKey: 'post_id', sourceKey: 'post_id' });
Post.hasMany(Like, { foreignKey: 'post_id', sourceKey: 'post_id'});

Like.belongsTo(Post, { foreignKey: 'post_id', sourceKey: 'post_id' });
Comment.belongsTo(Post, { foreignKey: 'post_id', targetKey: 'post_id' });
Post.belongsTo(Room, { foreignKey: 'room_id', targetKey: 'room_id' });


module.exports = Post;