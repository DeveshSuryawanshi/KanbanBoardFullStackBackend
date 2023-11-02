const express = require("express");
const {BoardModel} = require("../Models/board.model");

const bordRouter = express.Router();

bordRouter.get("/", async(req, res) =>{
    try {
        const Boards = await BoardModel.find();
        res.status(200).json(Boards);
    } catch (error) {
        res.status(400).json({"error" : error.message});
    }
})

bordRouter.post("/create", async(req, res) =>{
    try {
        const {name} = req.body;
        console.log(name)
        if(!name){
            return res.status(400).json({"error" : "Please Enter the name"})
        }
        const newBoard = new BoardModel({name});
        newBoard.save();
        res.status(200).json({msg : `New Board with name ${name} created`});
    } catch (error) {
        res.status(400).json({error});
    }
})

module.exports = {
    bordRouter
}