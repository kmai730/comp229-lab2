require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB database: Portfolio'))
  .catch((err) => console.error('Database connection error:', err));

app.get('/', (req, res) => {
  res.json({ message: "Welcome to My Portfolio application." });
});

// Import Routes
app.use('/api/contacts', require('./server/routes/contact.routes'));
app.use('/api/projects', require('./server/routes/project.routes'));
app.use('/api/qualifications', require('./server/routes/qualification.routes'));
app.use('/api/users', require('./server/routes/user.routes'));

const PORT = process.env.PORT;

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`App running in port ${PORT}`);
});
