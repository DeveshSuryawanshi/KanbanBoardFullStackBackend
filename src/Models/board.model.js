const mongoose = require("mongoose");

const boardSchema = mongoose.Schema({
    name : String,
    task : [{type : Object, ref : 'Task'}]
},{
    versionKey : false
})

const BoardModel = mongoose.model("/board", boardSchema);

module.exports = {
    BoardModel
}