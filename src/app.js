// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const app = express();

// Access environment variables
const apiKey = process.env.API_KEY;
const databaseUrl = process.env.DATABASE_URL;
const PORT = process.env.PORT || 8080;

// Log the environment variables (for debugging purposes only; avoid doing this in production)
console.log(`API Key: ${apiKey}`);
console.log(`Database URL: ${databaseUrl}`);
console.log(`Running on Port: ${PORT}`);

// Sample endpoint
app.get('/', (req, res) => {
  res.send(`Hello, World! The app is running on port ${PORT}.`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
