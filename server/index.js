const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
require("dotenv").config();

// Mongo DB Connections
mongoose
  .connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => {
    console.log("MongoDB Connection Succeeded.");
  })
  .catch((error) => {
    console.log("Error in DB connection: " + error);
  });

// Middleware Connections
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/users", require("./routes/api/users"));
app.use("/speed", require("./routes/api/speed"));
app.use("/distance", require("./routes/api/distance"));
app.use("/weight", require("./routes/api/weight"));
app.use("/door", require("./routes/api/door"));
app.use("/cage-requests", require("./routes/api/cageRequests"));
app.use("/level-requests", require("./routes/api/levelRequests"));
app.use(express.static(path.join(__dirname, "public")));

// Connection
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("App running in port: " + PORT);
});
