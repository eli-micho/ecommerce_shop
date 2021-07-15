const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const itemRoute = require("./routes/items");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("Connected to MongoDB")
});

//Middlewares
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*'); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if ('OPTIONS' == req.method) {
        res.send(200);
      }
      else {
        next();
      }
});
  

//Routes
app.use("/api/items", itemRoute);
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

/* app.get('/', (req, res) => { res.send('Hello from Express!')})
 */
app.listen(process.env.PORT || 5500, () => {
    console.log("Server is online");
});

