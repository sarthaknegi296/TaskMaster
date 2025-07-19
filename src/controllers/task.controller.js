const Task = require("../models/task.model");

const getTasks = async (req, res) => {
  try {
    if (req.params.id !== req.user.userId)
      return res.status(401).json({ message: "Unauthorized" });
    const tasks = await Task.find({ user: req.params.id });
    return res.status(200).json({
      data: tasks,
      message: "Tasks fetched successfully",
    });
  } catch (error) {
    console.log(`Error: ${error}`);
    throw error;
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create({
      ...req.body,
      user: req.user.userId,
    });
    return res.status(201).json({
      data: task,
      message: "Task created successfully",
    });
  } catch (error) {
    console.log(`Error: ${error}`);
    throw error;
  }
};

const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.status(200).json({
      data: task,
      message: "Task fetched successfully",
    });
  } catch (error) {
    console.log(`Error: ${error}`);
    throw error;
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.status(200).json({
      data: task,
      message: "Task updated successfully",
    });
  } catch (error) {
    console.log(`Error: ${error}`);
    throw error;
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.status(200).json({
      data: task,
      message: "Task deleted successfully",
    });
  } catch (error) {
    console.log(`Error: ${error}`);
    throw error;
  }
};

const addTaskComment = async (req, res) => {
  try {
    const { text }  = req.body;
    const task = await Task.findById(req.params.id);
    if(task) {
      const comment = {
        text,
        user: req.user.userId
      }
      task.comments.push(comment);
      await task.save();
      return res.status(200).json({
        data: task,
        message: "Task comment added successfully",
      });
    }
    else {
      return res.status(404).json({ message: "Task not found" });
    }
  }
  catch(error) {
    console.log(`Error: ${error}`);
    throw error;
  }
}

module.exports = {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  addTaskComment
};
