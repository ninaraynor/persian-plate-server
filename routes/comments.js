const express = require('express')
const router = express.Router()

const commentsCtrl = require('../controllers/comments')

//comments index 
router.get("/", commentsCtrl.index)

//comments create 
router.post("/", commentsCtrl.create)

//comments show
router.get("/:id", commentsCtrl.show)

//comments delete
router.delete("/:id", commentsCtrl.delete)

//comments update
router.put("/:id", commentsCtrl.update)


module.exports = router