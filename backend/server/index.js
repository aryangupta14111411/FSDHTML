const mongoose = require("mongoose");

// MongoDB connection
const mongo_URL = "mongodb://localhost:27017/testdb"; // Make sure your DB name is given
mongoose.connect(mongo_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB Connected Successfully");
})
.catch(err => {
  console.log("DB Connection Error:", err.message);
});

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true }
});

// User Model
const User = mongoose.model("User", userSchema);

// Function to create a new user
const createUser = async () => {
  try {
    const newUser = new User({
      name: "Aditya",
      email: "at999@gmail.com",
      age: 32
    });

    const user = await newUser.save();
    console.log("User Created Successfully:", user);
  } catch (err) {
    console.log("User Creation Error:", err.message);
  }
};

createUser();