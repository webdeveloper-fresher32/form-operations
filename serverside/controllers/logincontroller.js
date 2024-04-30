const user = require("../models/user.js");


async function validUser(req, res, next) {
    try {
        const { email, password } = req.body;
        if (await user.findOne({ email })) {
            console.log(req.body)
            return res.status(200).json({ message: "user verified" })
        }else{
            return res.status(400).json({ message: "user not found" })
        }

    } catch (error) {
        console.error("Error verifying user:", error);
        return res.status(500).json({ message: "Internal server error in verifying user" });
        next(error);
    }
}


module.exports = validUser; 