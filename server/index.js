require("dotenv/config");
const express = require("express");
const { authMiddleware } = require("./routes.js");
const app = express();

app.use(express.json());

app.get("/api/test", authMiddleware, (req, res) => {
  res.json({ message: "Test route works!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
