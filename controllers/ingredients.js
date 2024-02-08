const express = require('express')
const {Ingredient} = require('../models')


// Ingredient index action
const index = async (req,res,next) => {
	try {
    res.json(await Ingredient.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
}

// Ingredient create
const create = async (req,res,next) => {
  console.log(req.body)
  try {
    res.json(await Ingredient.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
}

// Ingredient show
const show = async (req,res,next) => {
    try {
        res.json(await Ingredient.findById(req.params.id));
      } catch (error) {
        res.status(400).json(error);
    }
}

// Ingredient delete
const deleteIngredient = async (req,res,next) => {
    try {
      res.json(await Ingredient.findByIdAndDelete(req.params.id));
    } catch (error) {
      res.status(400).json(error);
    }
}

// Ingredient update
const update = async (req,res,next) => {
  try {
    res.json(
      await Ingredient.findByIdAndUpdate(req.params.id, req.body, {new:true})
    );
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = {
	index,
	create,
	show,
    delete: deleteIngredient,
	update
}