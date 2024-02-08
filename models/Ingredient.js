const mongoose = require("mongoose");
const Schema = mongoose.Schema

const IngredientSchema = new Schema({
    name: String,
    quantity: Number,
    unit: Number,
  },{timestamps: true});
  
  
module.exports = mongoose.model("Ingredient", IngredientSchema);