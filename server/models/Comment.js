const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Schema for comments
const commentSchema = new Schema({
    id: String,
    comment: String,
    author: String
});

module.exports = mongoose.model("comments", commentSchema);