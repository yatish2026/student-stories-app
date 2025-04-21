import express from 'express';
import { protect } from '../middleware/authMiddleware.js'; // Middleware to protect the routes
import Story from '../models/Story.js'; // Story model

const router = express.Router();

// @desc    Upload a new story
// @route   POST /api/stories
// @access  Private
router.post('/', protect, async (req, res) => {
  const { title, contentType, contentUrl, textContent, category } = req.body;

  try {
    // Validate content type
    if (!['text', 'audio', 'video'].includes(contentType)) {
      return res.status(400).json({ message: 'Invalid content type. Must be text, audio, or video.' });
    }

    // Create a new story
    const story = new Story({
      author: req.user._id,  // Assuming the user object is attached after auth middleware
      title,
      contentType,
      contentUrl,            // Only required if contentType is audio or video
      textContent,           // Only required if contentType is text
      category,              // Optional field, default to 'other'
    });

    // Save the story to the database
    const createdStory = await story.save();
    res.status(201).json(createdStory);  // Return the newly created story
  } catch (error) {
    console.error(error);  // Log the error for debugging
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;
