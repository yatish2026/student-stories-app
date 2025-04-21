import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // Import the DB connection
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import storyRoutes from './routes/storyRoutes.js';

dotenv.config();
connectDB(); // Connect to DB

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Middleware to parse JSON request body

// Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Use routes
app.use('/api/auth', authRoutes);  // Authentication routes
app.use('/api/stories', storyRoutes);  // Story routes

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
