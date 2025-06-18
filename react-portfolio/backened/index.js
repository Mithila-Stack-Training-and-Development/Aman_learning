import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = 5000;
app.post('/api/contact', async (req, res) => {
  console.log('Received POST /api/contact request');
  console.log('Request body:', req.body);

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      console.log('Validation failed: Missing fields');
      return res.status(400).json({ message: "All fields are required." });
    }

    const contact = new Contact({ name, email, message });
    await contact.save();

    console.log('Message saved successfully');
    res.status(200).json({ message: "Message received successfully!" });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ message: "Server error. Try again later." });
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/contact_form', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Schema and Model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// API Route
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const contact = new Contact({ name, email, message });
    await contact.save();

    res.status(200).json({ message: "Message received successfully!" });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ message: "Server error. Try again later." });
  }
});

// Server Start
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
