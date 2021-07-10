const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const itemRoute = require("./routes/items");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("Connected to MongoDB")
});

//Middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

//Routes
app.use("/api/items", itemRoute);

app.listen(5500, () => {
    console.log("Server is online");
});

