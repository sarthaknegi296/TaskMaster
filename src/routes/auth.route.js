const express = require('express');
const authRouter = express.Router();
const { signIn, signUp } = require("../controllers/auth.controller");

authRouter.post("/signup", signUp);
authRouter.post("/signin", signIn);


module.exports = authRouter;