const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

//import routes
const userRoutes = require("./routes/user")
// app
const app = express();

// db
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log("DB Connected"))
    .catch(err => {
        console.log(err);
    });

// routes middleware
app.use("/api", userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});