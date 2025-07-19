const express = require('express');
const teamRouter = express.Router();

const { createTeam, getTeams, getTeam, addMembers } = require("../controllers/team.controller");
const authorize = require("../middlewares/auth.middleware");

teamRouter.post("/", authorize, createTeam);

teamRouter.get("/", authorize, getTeams);

teamRouter.get("/:id", authorize, getTeam);

teamRouter.put("/:id/members", authorize, addMembers);

module.exports = teamRouter;