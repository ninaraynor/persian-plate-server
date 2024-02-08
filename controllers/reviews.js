const express = require('express')
const {Review} = require('../models')


// Review index action
const index = async (req,res,next) => {
	try {
    res.json(await Review.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
}

// Review create
const create = async (req,res,next) => {
  console.log(req.body)
  try {
    res.json(await Review.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
}

// Review show
const show = async (req,res,next) => {
    try {
        res.json(await Review.findById(req.params.id));
      } catch (error) {
        res.status(400).json(error);
    }
}

// Review delete
const deleteReview = async (req,res,next) => {
    try {
      res.json(await Review.findByIdAndDelete(req.params.id));
    } catch (error) {
      res.status(400).json(error);
    }
}

// Review update
const update = async (req,res,next) => {
  try {
    res.json(
      await Review.findByIdAndUpdate(req.params.id, req.body, {new:true})
    );
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = {
	index,
	create,
	show,
    delete: deleteReview,
	update
}