const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mern_login");
    console.log(" MongoDB connected");
  } catch (err) {
    console.error("DB connection error:", err);
  }
};
connectDB();
module.exports = connectDB;
