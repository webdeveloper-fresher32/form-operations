const user = require("../models/user.js");
const { UserSchema } = require("../models/user.js");

async function reguser(req, res, next) {
    try {
        const { username, email, password, rePassword } = req.body;
        if (!username || !email || !password || !rePassword) {
            return res.status(400).json({ message: "All fields are required" });
        }
        if (password !== rePassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }
        console.log(req.body)
        if (await user.findOne({ email })) {
            return res.status(400).json({ message: "User already exists" });
        }
        await user.create({ username, email, password });
        return res.status(200).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error registering user:", error);
        return res.status(500).json({ message: "Internal server error" });
        next(error);
    }
}

module.exports = { reguser };
