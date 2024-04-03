const express = require('express');
const cors = require('cors');
const axios = require('axios')

const app = express();

// Use the cors middleware with specified options
app.use(cors({
  origin: 'http://localhost:5174', // Allow requests from this origin
  methods: ['GET'], // Allow only GET requests
  allowedHeaders: ['X-Requested-With'], // Allow only X-Requested-With header
}));

// Define your API endpoint
app.get('/latestnews', async (req, res) => {
    try {
      const response = await axios.get('https://www.mmobomb.com/api1/latestnews');
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  app.get('/games', async (req, res) => {
    console.log("test")
    try {
      const response = await axios.get('https://www.mmobomb.com/api1/games');
      console.log(response)
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });



 
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});