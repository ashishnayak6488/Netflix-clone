const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes")
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/netflix" ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log("DB Connected")
});

app.use("/api/user" , userRoutes)

app.listen(5000, console.log("Server started"));
