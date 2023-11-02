const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
require("dotenv").config();
const PORT = process.env.PORT;
const {bordRouter}  = require("./src/Routes/bord.routes")

const app = express();
app.use(cors());
app.use(express.json());
app.use("/bords", bordRouter);

app.get("/", async(req, res) =>{
    try {
        res.status(200).send("<h1>Welcome to the Server</h1>")
    } catch (error) {
        res.status(400).send({"error" : error})
    }
})

app.listen(PORT, async() =>{
    try {
        await connection;
        console.log("Connected to the DataBase");
        console.log(`Server is Runing on port ${PORT}`);
    } catch (error) {
        console.log(error);
    }
})