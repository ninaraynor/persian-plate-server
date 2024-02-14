const express = require('express')
const {Recipe} = require('../models')


// Recipe index action
const index = async (req, res, next) => {
  try {
    const sortBy = req.query.sortBy || 'title';
    const sortOrder = req.query.sortOrder || 'asc';
    let recipes = await Recipe.find({}).sort({ [sortBy]: sortOrder });
    res.json(recipes);
  } catch (error) {
    res.status(400).json(error);
  }
}

// Recipe create
const create = async (req,res,next) => {
  console.log(req.body)
  try {
    res.json(await Recipe.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
}

// Recipe show
const show = async (req,res,next) => {
    try {
        res.json(await Recipe.findById(req.params.id));
      } catch (error) {
        res.status(400).json(error);
    }
}

// Recipe delete
const deleteRecipe = async (req,res,next) => {
    try {
      res.json(await Recipe.findByIdAndDelete(req.params.id));
    } catch (error) {
      res.status(400).json(error);
    }
}

// Recipe update
const update = async (req,res,next) => {
  try {
    res.json(
      await Recipe.findByIdAndUpdate(req.params.id, req.body, {new:true})
    );
  } catch (error) {
    res.status(400).json(error);
  }
}

const recipesByDish = async (req, res, next) => {
  try {
    res.json(
      await Recipe.find({ recipeType: req.params.dishId })
    )
  }
  catch (error) {
    res.status(400).json(error)
  }
}

const recipeDetail = async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.recipeId);
    if (!recipe) {
        return res.status(404).json({ error: 'Recipe not found' });
    }
    res.json(recipe);
  } catch (error) {
    console.error('Error fetching recipe:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
	index,
	create,
	show,
  delete: deleteRecipe,
	update,
  recipesByDish,
  recipeDetail
}