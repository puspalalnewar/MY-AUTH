const bodyParser = require("body-parser");
const express = require("express");
const connectDB = require("./src/db/db");
require("dotenv").config();

// Connect Database
connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
