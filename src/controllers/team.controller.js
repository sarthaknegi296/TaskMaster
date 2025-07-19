const Team = require("../models/team.model");

const createTeam = async (req, res) => {
    try {
        const { name } = req.body;
        const team = await Team.create({ name });
        return res.status(201).json({
            data: team,
            message: "Team created successfully"
        });
    }
    catch(error) {
        console.log(`Error: ${error}`);
        throw error;
    }
};

const getTeams = async (req, res) => {
    try {
        const teams = await Team.find({});
        return res.status(200).json({
            data: teams,
            message: "Teams fetched successfully"
        });
    }
    catch(error) {
        console.log(`Error: ${error}`);
        throw error;
    }
};

const getTeam = async (req, res) => {
    try {
        const id = req.params.id;
        const team = await Team.findById(id);
        if(!team) {
            return res.status(404).json({ message: "Team not found" });
        }
        return res.status(200).json({
            data: team,
            message: "Team fetched successfully"
        });
    }
    catch(error) {
        console.log(`Error: ${error}`);
        throw error;
    }
};

const addMembers = async (req, res) => {
    try {
        const { userId } = req.body;    // User Id which needs to be added to the team
        const teamId = req.params.id;   // Team Id to which user needs to be added
        const team = await Team.findById(teamId);
        if(!team) {
            return res.status(404).json({ message: "Team not found" });
        }
        team.members.push(userId);
        await team.save();
        return res.status(200).json({
            data: team,
            message: "User added to team successfully"
        });
    }
    catch(error) {
        console.log(`Error: ${error}`);
        throw error;
    }
};


module.exports = {
    createTeam,
    getTeams,
    getTeam,
    addMembers
}