const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('backend is running...');
});

mongoose.connect("mongodb+srv://test:test1@cluster0.ibygxdw.mongodb.net/SeaWorld")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log("DB error:", err));


const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});
const User = mongoose.model("User", UserSchema);


 
    app.post("/register", async (req, res) => {
     const { username, password } = req.body;

   
    if (!username || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    
    await User.create({ username, password });
    res.json({ message: "saved" });
      });


app.listen(3000, () => console.log("Server running on http://localhost:3000"));