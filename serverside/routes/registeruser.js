const express = require('express');
const router = express.Router();
const { reguser } = require('../controllers/registercontroller.js')
const validUser = require("../controllers/logincontroller.js");
const sendmail = require("../controllers/sendmailcontroller.js")

router.route("/register").post(reguser);
router.route("/login").post(validUser);
router.route("/forget-password").post(sendmail);


module.exports = router;