require('dotenv').config();
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected');
    }
    catch(error) {
        console.log(`Error: ${error}`);
        throw error;
    }
}

module.exports = connectDB;