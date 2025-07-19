const express = require('express');
const authorize = require('../middlewares/auth.middleware');
const { createTask, getTasks, getTask, updateTask, deleteTask, addTaskComment } = require('../controllers/task.controller');

const taskRouter = express.Router();

taskRouter.post("/", authorize, createTask);

taskRouter.get("/user/:id", authorize, getTasks);

taskRouter.get("/:id", authorize, getTask);

taskRouter.put("/:id", authorize, updateTask);

taskRouter.delete("/:id", authorize, deleteTask);

taskRouter.put("/:id/comment", authorize, addTaskComment);

module.exports = taskRouter;