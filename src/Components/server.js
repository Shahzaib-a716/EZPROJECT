const express = require('express');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/faceAuth', { useNewUrlParser: true, useUnifiedTopology: true });

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  faceDescriptor: String, // Encrypted face descriptor
});

const User = mongoose.model('User', userSchema);

// Encrypt data
const encryptData = (data, secret) => {
  const cipher = crypto.createCipher('aes-256-cbc', secret);
  let encrypted = cipher.update(JSON.stringify(data), 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
};

// Decrypt data
const decryptData = (encrypted, secret) => {
  const decipher = crypto.createDecipher('aes-256-cbc', secret);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return JSON.parse(decrypted);
};

// Register User
app.post('/register', async (req, res) => {
  const { name, email, password, faceDescriptor } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const encryptedDescriptor = encryptData(faceDescriptor, process.env.SECRET_KEY);

  const user = new User({ name, email, password: hashedPassword, faceDescriptor: encryptedDescriptor });
  try {
    await user.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(400).json({ error: 'Email already exists!' });
  }
});

// Start Server
app.listen(5000, () => console.log('Server running on port 5000'));
