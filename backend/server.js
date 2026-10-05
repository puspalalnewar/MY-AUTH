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
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello this is from backend!!");
});

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/auth", authRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
