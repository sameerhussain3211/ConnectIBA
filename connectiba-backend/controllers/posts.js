const db = require('../utilities/database');
const Post = require('../models/post');
const Like = require('../models/like');
const User = require('../models/user');
const Comment = require('../models/comment');


// GETTING POSTS BY ROOM <ID></ID>
exports.getPosts = (req, res) => {
    const roomId = req.params.roomId;
    Post.findAll({
        include: [
            {
                model: Comment,
            },
            {
                model: User
            }, {
                model: Like
            }
        ],
        where: { 'room_id': roomId }
    }).then((result) => {
        return res.json(result);
    }).catch((error) => {
        console.log(error);
        return res.json({
            "err": error

        });
    });
}

// get post single:
exports.getSinglePosts = (req, res) => {
    const postId = req.params.postId;
    Post.findOne({
        include: [
            {
                model: Comment,
            },
            {
                model: User
            }, {
                model: Like
            }
        ],
        where: { 'post_id': postId }
    }).then((result) => {
        return res.json(result);
    }).catch((error) => {
        console.log(error);
        return res.json({
            "err": error

        });
    });
}

// ADDING NEW POSTS
exports.createPost = (req, res) => {
    const data = req.body;
    console.log("this is post media", data.media);
    postData = {
        title: data.title,
        content: data.content,
        media: data.media,
        room_id: data.room_id,
        posted_by: data.posted_by,
    }

    Post.create(postData).then(result => {
        console.log("this is ", result);
        res.status(201).json({
            success: true,
            posted: result
        });
    }).catch((err) => {
        console.log(err);
        res.status(400).json(err);

    });
}

// DELETE POSTS

exports.deletePost = (req, res) => {
    return res.status(200);
};


// UPDATE POSTS
exports.updatePost = (req, res) => {
    return res.status(200);
}

// LIke posts
exports.updateLikes = (req, res) => {


}


// LIke posts

exports.updateComments = (req, res) => {
    const postData = req.body;
    Comment.create(postData).then(result => {
        console.log("this is ", result);
        Post.findAll({
            where: {
                post_id: req.body.post_id,
            },
            include: [
                {
                    model: Comment,
                },
                {
                    model: User
                }, {
                    model: Like
                },
            ],
        }).then((result) => {
            return res.status(201).json(result);
        }).catch((error) => {
            console.log(error);
            return res.json({
                "err": error

            });
        });
    }).catch((err) => {

        console.log(err);
        res.status(400).json(err);

    });
}


// getLIkes
exports.getLikes = (req, res) => {
    Like.findAll({
        include: [{
            model: Post,
        }],
        where: {
            "erp_id": 25120
        }

    }).then((result) => {
        console.log(result);
        return res.json(result);
    }).catch((error) => {
        console.log(error);

        return res.json({
            "err": error

        });
    });
}

// get comments
exports.getComments = (req, res) => {
}
