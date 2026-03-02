require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Staff = require("./models/Staff");

// Connect to Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to Atlas ✅"))
  .catch(err => console.log(err));

async function createStaff() {

  const hashedPassword =
    await bcrypt.hash("idea_thon2k26", 10);

  await Staff.create({
    username: "ideathon_admin",
    password: hashedPassword
  });

  console.log("✅ Staff Created Successfully");

  mongoose.disconnect();
}

createStaff();