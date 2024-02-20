// Creating Room
const Room = require('../models/room');

exports.createRoom = (req, res) => {
    const name = req.body.room_name;
    const description = req.body.description;
    Room.create({
        room_name: name,
        description: description,
    }).then((result) => {
        return res.json({
            results: result
        })
    }).catch((err) => {
        console.log("got and error", err);
        return res.json({
            success: false
        })
    });
}