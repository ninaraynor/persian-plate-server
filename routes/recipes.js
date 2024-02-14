const express = require('express')
const router = express.Router()

const recipesCtrl = require('../controllers/recipes')

//recipes index 
router.get("/", recipesCtrl.index)

router.get("/dishes/:dishId", recipesCtrl.recipesByDish)

//recipes show
router.get("/:id", recipesCtrl.show)

//recipes create 
router.post("/", recipesCtrl.create)

//recipes delete
router.delete("/:id", recipesCtrl.delete)

//recipes update
router.put("/:id", recipesCtrl.update)


module.exports = router