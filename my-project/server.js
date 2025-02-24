require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected Successfully!"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

const ProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  whatsapp:{type:String},
  facebook:{type:String},
  instagram:{type:String}
});

const Profile = mongoose.model("Profile", ProfileSchema);

const admin = require("firebase-admin");
admin.initializeApp();

app.post("/api/profiles", async (req, res) => {
  try {
    const { name, phoneNumber, email, password,whatsapp,facebook,instagram} = req.body;
    const newProfile = new Profile({ name, phoneNumber, email, password,whatsapp,facebook,instagram});
    await newProfile.save();
    res.status(201).json({ message: "Profile created successfully", profile: newProfile });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});


// app.post("/api/google-login", async (req, res) => {
//   try {
//     const { name, email } = req.body;
    
//     if (!name || !email) {
//       return res.status(400).json({ error: "Missing required fields" });
//     }

//     console.log("Google Login Request Received:", { name, email });

//     let user = await Profile.findOne({ email });

//     if (!user) {
//       user = new Profile({ name, email, phoneNumber: "", password: "" });
//       await user.save();
//       console.log("New user saved in MongoDB:", user);
//     } else {
//       console.log("User already exists:", user);
//     }

//     res.json({ message: "User saved successfully", user });
//   } catch (error) {
//     console.error("Google Login Server Error:", error);
//     res.status(500).json({ error: "Server error", details: error.message });
//   }
// });
// Get user by name and password

app.get('/api/profile/:name', async (req, res) => {
  try {
    const { name,password } = req.params;
    const user = await User.findOne({ name,password });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update scan count
app.post('/api/update-scan-count', async (req, res) => {
  const { name } = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { name },
      { $inc: { scanCount: 1 } }, // Increase scan count by 1
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'Scan count updated', scanCount: user.scanCount });
  } catch (error) {
    console.error('Error updating scan count:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

