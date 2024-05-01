const user = require("../models/user.js");
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken');
async function sendmail(req, res, next) {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }
        const token = jwt.sign({ email }, "sanjaymawa")
        // const url = `http://localhost:3000/reset-password?id=${token}`
        if (await user.findOne({ email })) {
            const transpoter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: "pirikiralaganesh1234@gmail.com",
                    pass: "djgg ufll ovkk mkgp"
                }
            })

            const info = await transpoter.sendMail({
                from: "pirikiralaganesh1234@gmail.com",
                to: email,
                subject: "reset password",
                text: "click on the link below to reset your password",
                html: `<a href="http://localhost:3000/reset-password?id=${token}">click here</a>`
            })
            return res.status(200).json({ message: "Email sent successfully" });
        }
    } catch (error) {
        next(error)
        return res.status(500).json({ message: "Internal server error for sending mail" });
    }
}

module.exports = sendmail