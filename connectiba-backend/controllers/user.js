const sequelize = require('../utilities/database');
const RoomMember = require('../models/room_member');
const User = require('../models/user');
const Post = require('../models/post');
const { Op } = require('sequelize');

exports.getTest = (req, res) => {
    console.log(RoomMember);
    res.status(200).json({ name: "this" });

}


exports.getProfile = (req, res) => {
    const erp_id = req.params.erp_id;
    User.findOne({
        include: [{
            model: Post,
        },
        ],
        where: { 'erp_id': erp_id },


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

// DELETE PROFILE

// UPDATE PROFILE



// Search user

exports.searchUser = (req, res) => {
    console.log(req.body);
    User.findAll({
        where: {
            [Op.or]: [
                { 'first_name': { [Op.like]: `%${req.body.searchText}%` } },
                { 'last_name': { [Op.like]: `%${req.body.searchText}%` } },
                { 'current_job': { [Op.substring]: req.body.searchText } },
                { 'city': { [Op.like]: `%${req.body.searchText}%` } },
                { 'country': { [Op.like]: `%${req.body.searchText}%` } },
            ],
        },
    }).then((result) => {
        return res.status(200).json({
            success: true,
            result: result
        });
    }).catch((error) => {
        console.log("this is error in te", error);
        res.status(404).json({ success: false, err: error });
    });
}



