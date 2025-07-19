const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if(existingUser) {
            const error = new Error("User already exists");
            error.statusCode = 400;
            throw error;
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });
        return res.status(201).json({
            data: user,
            message: "User registered successfully"
        });
    }
    catch(error) {
        console.log(`Error: ${error}`);
        throw error;
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        return res.status(200).json({
            data: users,
            message: "Users fetched successfully"
        });
    }
    catch(error) {
        console.log(`Error: ${error}`);
        throw error;
    }
}

module.exports = {
    createUser,
    getUsers
}