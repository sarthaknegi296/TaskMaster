const { createUser, getUsers } = require("../controllers/user.controller");
const express = require("express");

const userRouter = express.Router();

userRouter.post("/", createUser);

userRouter.get("/", getUsers);

module.exports = userRouter;
