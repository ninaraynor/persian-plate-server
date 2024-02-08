const express = require('express')
const {Dishes} = require('../models')


// dishes index action
const index = async (req,res,next) => {
	try {
    res.json(await Dishes.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
}

// Dish create
const create = async (req,res,next) => {
  try {
    res.json(await Dishes.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
}

// Dishes show
const show = async (req,res,next) => {
    try {
        res.json(await Dishes.findById(req.params.id));
      } catch (error) {
        res.status(400).json(error);
    }
}


// Dishes delete
const deleteDish = async (req,res,next) => {
    try {
      res.json(await Dishes.findByIdAndDelete(req.params.id));
    } catch (error) {
      res.status(400).json(error);
    }
}

// Dishes update
const update = async (req,res,next) => {
  try {
    res.json(
      await Dishes.findByIdAndUpdate(req.params.id, req.body, {new:true})
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