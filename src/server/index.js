import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("dist"));

const port = 8081;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const projectData = {};

app.post("/addTrip", async (req, res) => {
    const { destination, date } = req.body;
  
    try {
      // Fetch coordinates from Geonames
      const geoRes = await axios.get(`http://api.geonames.org/searchJSON?q=${destination}&maxRows=1&username=${process.env.GEONAMES_USER}`);
      const geoData = geoRes.data.geonames[0];
  
      if (!geoData) {
        return res.status(404).send({ error: "Location not found" });
      }
  
      const { lat, lng } = geoData;
  
      // Fetch weather data from Weatherbit
      const weatherRes = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${process.env.WEATHERBIT_KEY}`);
      const weatherData = weatherRes.data.data;
  
      if (!weatherData || weatherData.length === 0) {
        return res.status(404).send({ error: "Weather data not available" });
      }
  
      const weather = weatherData[0];
  
      // Fetch image from Pixabay
      const pixabayRes = await axios.get(`https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=${destination}&image_type=photo`);
      const pixabayHits = pixabayRes.data.hits;
      const image = pixabayHits.length > 0 ? pixabayHits[0].webformatURL : "";
  
      const projectData = {
        destination,
        date,
        weather: {
          description: weather.weather.description,
          temp: weather.temp,
        },
        image,
      };
  
      console.log("Project Data:", projectData); // Debugging
      res.send(projectData);
    } catch (error) {
      console.error("Server Error:", error.message); // Log the error message
      res.status(500).send({ error: "Failed to fetch data" });
    }
  });
  
  
  
