const express = require('express')
const router = express.Router()

const reviewsCtrl = require('../controllers/reviews')

//reviews index 
router.get("/", reviewsCtrl.index)

//reviews create 
router.post("/", reviewsCtrl.create)

//reviews show
router.get("/:id", reviewsCtrl.show)

//reviews delete
router.delete("/:id", reviewsCtrl.delete)

//reviews update
router.put("/:id", reviewsCtrl.update)


module.exports = router