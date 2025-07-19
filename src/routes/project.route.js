const express  = require('express');
const projectRouter = express.Router();
const { createProject, getProjects } = require("../controllers/project.controller");
const authorize = require("../middlewares/auth.middleware");

projectRouter.post("/", authorize, createProject);

projectRouter.get("/", authorize, getProjects);



module.exports = projectRouter;