const bodyParser = require("body-parser");
const express = require("express");
const connectDB = require("./src/db/db");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRouter = require("./src/routes/auth.routes");

// Connect Database
connectDB();

const app = express();

app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
