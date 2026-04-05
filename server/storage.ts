const mongoose = require("mongoose");

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL must be set");
}

mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log('Connected to MongoDB via mongoose'))
  .catch((err) => console.error('MongoDB connection error:', err));

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: "user" },
  createdAt: { type: Date, default: Date.now },
});
const UserModel = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = {
  UserModel,
};
