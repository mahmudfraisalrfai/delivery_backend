const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 3000;

// Load global data
global.foodData = null;
global.foodCategory = null;

require("./db")((err, data, CatData) => {
  if (err) {
    console.log("Error loading data:", err);
  } else {
    console.log("Data loaded successfully.");
    global.foodData = data;
    global.foodCategory = CatData;
  }
});

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://delivery-frontend-d7lv.onrender.com",
    ], // Adjust the origins as needed
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/static", express.static(path.join(__dirname, "/image")));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", require("./Routes/Auth"));

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
