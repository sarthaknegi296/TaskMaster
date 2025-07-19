const Project = require("../models/project.model");
const Team = require("../models/team.model");

const createProject = async (req, res) => {
    try {
        const { name, team } = req.body;
        const project = await Project.create({ name, team });
        return res.status(201).json({
            data: project,
            message: "Project created successfully"
        });
    }
    catch(error) {
        console.log(`Error: ${error}`);
        throw error;
    }
};

const getProjects = async (req, res) => {
    try {
        const userId = req.user.userId;
        const team = await Team.find({ members: userId });
        const projects = await Project.find({ team: team });

        return res.status(200).json({
            data: projects,
            message: "Projects fetched successfully"
        });
    }
    catch(error) {
        console.log(`Error: ${error}`);
        throw error;
    }
};

module.exports = {
    createProject,
    getProjects
}