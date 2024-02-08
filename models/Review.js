const mongoose = require("mongoose");
const Schema = mongoose.Schema

const ReviewSchema = new Schema({
    username: String,
    description: String,
    commentedAt: Date,
  },{timestamps: true});
  
  
  module.exports = mongoose.model("Review", ReviewSchema);