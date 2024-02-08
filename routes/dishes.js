const express = require('express')
const router = express.Router()

const dishesCtrl = require('../controllers/dishes')

//dishes index 
router.get("/", dishesCtrl.index)

//dishes create 
router.post("/", dishesCtrl.create)

//dishes show
router.get("/:id", dishesCtrl.show)

//dishes delete
router.delete("/:id", dishesCtrl.delete)

//dishes update
router.put("/:id", dishesCtrl.update)


module.exports = router