const mongoose = require("mongoose");
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    username: String,
    comment: String,
    avatar: String,
  },{timestamps: true});
  
  
module.exports = mongoose.model("Comment", CommentSchema);