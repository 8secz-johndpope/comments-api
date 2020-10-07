const db = require("../models");
const UserModel = db.user;

exports.signUp = async function (req, res) {

    try {

        const user = new UserModel({
            email: req.body.email,
        });

        await user.save();

        return res.status(201).send({message: "User was registered successfully!"});
    } catch (err) {

        res.status(500).send({message: err});
    }
};