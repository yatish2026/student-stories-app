# Student Stories & Podcast Platform

A web application that allows students to share stories, podcasts, and experiences. The platform supports both audio and video uploads, as well as text-based stories. Users can comment, like, and share stories, while admins can approve content for the platform.

## Features

- **User Authentication**: Secure user login and registration.
- **Story Upload**: Students can upload stories in audio, video, or text formats.
- **Like/Comment System**: Interact with stories by liking and commenting.
- **Follow Users**: Follow your favorite storytellers and podcasts.
- **Admin Panel**: Admin can approve or reject content before it goes live.
- **Search & Filter**: Find stories based on categories like motivation, humor, etc.
- **Responsive Design**: Fully responsive UI optimized for both desktop and mobile.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Media Storage**: Cloudinary
- **File Uploads**: Multer
- **Deployment**: Heroku / Railway (for backend), Netlify / Vercel (for frontend)

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+)
- [MongoDB](https://www.mongodb.com/) (Cloud or Local)

### Clone the Repository

```bash
git clone https://github.com/yourusername/student-stories-app.git


### Backend Setup
Navigate to the student-stories-backend folder:

bash
Copy
Edit
cd student-stories-app/student-stories-backend
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file in the student-stories-backend folder and add the following:

env
Copy
Edit
PORT=5000
MONGO_URI=mongodb://your-mongodb-uri
JWT_SECRET=your-secret-key
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
Start the backend server:

bash
Copy
Edit
npm run dev
Frontend Setup
Navigate to the client folder:

bash
Copy
Edit
cd client
Install frontend dependencies:

bash
Copy
Edit
npm install
Start the frontend:

bash
Copy
Edit
npm start
Deployment
For deployment, you can use services like Heroku, Render, Netlify, or Vercel.
