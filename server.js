require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const userRouter = require('./src/routes/user.route');
const authRouter = require('./src/routes/auth.route');
const taskRouter = require('./src/routes/task.route');
const projectRouter = require('./src/routes/project.route');
const teamRouter = require('./src/routes/team.route');


const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/tasks", taskRouter);
app.use("/api/teams", teamRouter);
app.use("/api/projects", projectRouter);


connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
});
