require("dotenv").config();

require('./config/db.connection.js')

const { PORT } = process.env;

const express = require("express");

const app = express();

const cors = require("cors")
const morgan = require("morgan")

const dishesRouter = require('./routes/dishes')
const recipesRouter = require('./routes/recipes')
const ingredientsRouter = require('./routes/ingredients')


// Middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use(cors()); 
app.use(morgan("dev"));

app.use('/dishes', dishesRouter)
app.use('/recipes', recipesRouter)
app.use('/recipes', ingredientsRouter)

// Routes
app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));