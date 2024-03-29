const mongoose = require("mongoose");
const Schema = mongoose.Schema

const ReviewSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    description: String,
    commentedAt: Date,
  },{timestamps: true});
  
  
module.exports = mongoose.model("Review", ReviewSchema);