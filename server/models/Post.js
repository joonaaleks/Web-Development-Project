const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Schema for posts
const postSchema = new Schema({
    author: String,
    post: String,
});

module.exports = mongoose.model("posts", postSchema);