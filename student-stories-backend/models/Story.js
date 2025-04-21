import mongoose from 'mongoose';

const storySchema = new mongoose.Schema(
  {
    // Story author (User who posted the story)
    author: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
    },

    // Title of the story
    title: { 
      type: String, 
      required: true, 
      trim: true 
    },

    // Content type: can be text, audio, or video
    contentType: { 
      type: String, 
      enum: ['text', 'audio', 'video'],
      required: true 
    },

    // URL for non-text content (audio/video)
    contentUrl: { 
      type: String, 
      required: function () { 
        return this.contentType !== 'text'; 
      } 
    },

    // Text content (only required if contentType is text)
    textContent: { 
      type: String, 
      required: function () { 
        return this.contentType === 'text'; 
      } 
    },

    // Category of the story (funny, horror, motivational, etc.)
    category: { 
      type: String, 
      enum: ['funny', 'horror', 'motivational', 'drama', 'college-life', 'other'],
      default: 'other' 
    },

    // Likes (users who liked the story)
    likes: [{ 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User' 
    }],

    // Comments on the story
    comments: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        text: String,
        createdAt: { type: Date, default: Date.now },
      }
    ],

    // Is the story approved for public viewing?
    isApproved: { 
      type: Boolean, 
      default: false 
    },

  },
  {
    timestamps: true,  // Automatically adds createdAt and updatedAt fields
  }
);

const Story = mongoose.model('Story', storySchema);
export default Story;
