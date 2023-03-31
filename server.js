const express = require('express');
const axios = require('axios');
require('dotenv').config();

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/api", async (req, res) => {

  try {

    const { url } = req.query;

    const { data } = await axios({
      method: 'get',
      url,
      headers: {
        'Authorization': `Bearer ${process.env.YELP_API_KEY}`,
      },
    });

    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});


// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));