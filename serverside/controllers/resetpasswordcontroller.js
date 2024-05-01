const user = require("../models/user.js")
const jwt = require('jsonwebtoken');

async function resetpassword(req, res) {
    try {
        const { password } = req.body;
        const { id } = req.query;
        const token = jwt.verify(id, "sanjaymawa");
        const usermail = token.email;
        if (await user.findOne({ email: usermail })) {
            await user.findOneAndUpdate({ email: usermail }, { password: password })
        }
        return res.status(200).json({ message: "password reset successfully" })
    } catch (error) {
        console.log("reset password error", error)
        return res.status(500).json({ message: "internal server error" })
    }
}


module.exports = resetpassword