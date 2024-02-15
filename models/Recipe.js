const mongoose = require("mongoose");
const Schema = mongoose.Schema

const RecipeSchema = new Schema({
  createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User' 
  },
  recipeType: {
      type: Schema.Types.ObjectId,
      ref: 'Dish'
  },
  title: String,
  portionSize: String, 
  prepTime: {
      value: Number, 
      unit: {
          type: String,
          enum: ['seconds', 'minutes', 'hours', 'days'] 
      }
  },
  cookingTime: {
      value: Number, 
      unit: {
          type: String,
          enum: ['seconds', 'minutes', 'hours', 'days'] 
      }
  },
  ingredients: [{
      name: String,
      quantity: Number, 
      unit: String 
  }],
  fullName: String,
  familyOrigin: String,
  uniqueIngredients: [String], 
  photo: String, 
  instructions: String,
  createdAt: {
      type: Date,
      default: Date.now
  }
}, { timestamps: true });

  
  
module.exports = mongoose.model("Recipe", RecipeSchema);