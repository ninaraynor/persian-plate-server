const express = require('express')
const router = express.Router()

//dishes index 
router.get("/", async (req, res) => {
	res.status(200).json({message: "dishes index route"})
});

//dishes create 
router.post("/", async (req, res) =>  {
	res.status(201).json({message: "dishes create route"})
});

//dishes show
router.get("/:id", (req, res) => {
	res.status(200).json({message: "dishes show route: " + req.params.id })
});

//dishes delete
router.delete("/:id", (req, res) => {
	res.status(200).json({message: "dishes delete route: " + req.params.id })
});

//dishes update
router.put("/:id", (req, res) => {
	console.log(req.body)
	res.status(200).json({message: "dishes update route: " + req.params.id })
});


module.exports = router