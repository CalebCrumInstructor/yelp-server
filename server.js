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

// app.all('/', function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next()
// });

app.get("/api", async (req, res) => {

  try {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    const { url } = req.query;

    if (!url) {
      return res.status(400).json({ message: "url parameter is required" });
    }

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
