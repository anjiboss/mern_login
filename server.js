require("dotenv").config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./config/db");
const app = express();

//Connect DB
connectDB();

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error Logged: ${err}`);
  server.close(() => process.exit(1));
});
