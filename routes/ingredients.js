const express = require('express')
const router = express.Router()

const ingredientsCtrl = require('../controllers/ingredients')

//ingredients index 
router.get("/", ingredientsCtrl.index)

//ingredients create 
router.post("/", ingredientsCtrl.create)

//ingredients show
router.get("/:id", ingredientsCtrl.show)

//ingredients delete
router.delete("/:id", ingredientsCtrl.delete)

//ingredients update
router.put("/:id", ingredientsCtrl.update)


module.exports = router