const express = require('express')
const {Comment} = require('../models')


// Comment index action
const index = async (req,res,next) => {
	try {
    res.json(await Comment.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
}

// Comment create
const create = async (req,res,next) => {
  try {
    res.json(await Comment.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
}

// Comment show
const show = async (req,res,next) => {
    try {
        res.json(await Comment.findById(req.params.id));
      } catch (error) {
        res.status(400).json(error);
    }
}

// Comment delete
const deleteComment = async (req,res,next) => {
    try {
      res.json(await Comment.findByIdAndDelete(req.params.id));
    } catch (error) {
      res.status(400).json(error);
    }
}

// Comment update
const update = async (req,res,next) => {
  try {
    res.json(
      await Comment.findByIdAndUpdate(req.params.id, req.body, {new:true})
    );
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = {
	index,
	create,
	show,
    delete: deleteComment,
	update
}