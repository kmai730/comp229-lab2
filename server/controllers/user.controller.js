const User = require('../models/user.model');
const baseController = require('./base.controller')(User);
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'the secret key';

module.exports = {
  ...baseController,
  
  signin: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
      res.json({ message: 'Signed in successfully', token });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  signout: (req, res) => {
    // JWT is stateless; client drops the token. Send success response.
    res.json({ message: 'Signed out successfully' });
  },

  verifyToken: (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(403).json({ message: 'No token provided' });

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) return res.status(401).json({ message: 'Unauthorized / Invalid token' });
      req.user = decoded;
      next();
    });
  }
};