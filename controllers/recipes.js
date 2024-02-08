const express = require('express')
const {Recipe} = require('../models')


// Recipes index action
const index = async (req,res,next) => {
	try {
    res.json(await Recipe.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
}

// Recipes create
const create = async (req,res,next) => {
  console.log(req.body)
  try {
    res.json(await Recipe.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
}

// Recipes show
const show = async (req,res,next) => {
    try {
        res.json(await Recipe.findById(req.params.id));
      } catch (error) {
        res.status(400).json(error);
    }
}

// Recipes delete
const deleteRecipe = async (req,res,next) => {
    try {
      res.json(await Recipe.findByIdAndDelete(req.params.id));
    } catch (error) {
      res.status(400).json(error);
    }
}

// Recipes update
const update = async (req,res,next) => {
  try {
    res.json(
      await Recipe.findByIdAndUpdate(req.params.id, req.body, {new:true})
    );
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = {
	index,
	create,
	show,
  delete: deleteRecipe,
	update
}