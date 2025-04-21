import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

// Protect routes with this middleware
const protect = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.startsWith('Bearer') 
                ? req.headers.authorization.split(' ')[1] 
                : null;

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user info to request object
    req.user = decoded;  // Add user info (from token) to request for future use
    next();  // Allow access to next route or middleware
  } catch (error) {
    console.error('Token verification error:', error);  // Log error for debugging purposes
    return res.status(401).json({ message: 'Not authorized, invalid token' });
  }
};

export { protect };
