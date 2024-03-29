const express = require('express')
const {Dish} = require('../models')


// Dish index action
const index = async (req,res,next) => {
	try {
    res.json(await Dish.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
}

// Dish create
const create = async (req,res,next) => {
  try {
    res.json(await Dish.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
}

// Dish show
const show = async (req,res,next) => {
    try {
        res.json(await Dish.findById(req.params.id));
      } catch (error) {
        res.status(400).json(error);
    }
}

// Dish delete
const deleteDish = async (req,res,next) => {
    try {
      res.json(await Dish.findByIdAndDelete(req.params.id));
    } catch (error) {
      res.status(400).json(error);
    }
}

// Dish update
const update = async (req,res,next) => {
  try {
    res.json(
      await Dish.findByIdAndUpdate(req.params.id, req.body, {new:true})
    );
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = {
	index,
	create,
	show,
  delete: deleteDish,
	update
}