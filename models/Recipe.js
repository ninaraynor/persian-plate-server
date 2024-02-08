const mongoose = require("mongoose");
const Schema = mongoose.Schema

const RecipeSchema = new Schema({
    title: String,
    username: String,
    description: String,
    instructions: String,
    ingredients: String,
    createdAt: Date,
  },{timestamps: true});
  
  
module.exports = mongoose.model("Recipe", RecipeSchema);