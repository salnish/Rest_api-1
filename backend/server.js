const express = require("express");
const cors = require('cors');
const colors = require ('colors');
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require('./config/db')
const port = process.env.PORT || 5000;
const goalRouter = require("./routes/goalRoute");
const userRouter = require("./routes/userRoute");

connectDB()

const app = express();
app.use(cors())
// app.use(express.static(path.join(__dirname, 'dist')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalRouter);
app.use("/api/users", userRouter);

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`.yellow));
