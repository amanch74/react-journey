const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

app.get("/api/restaurants", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.swiggy.com/dapi/restaurants/list/v5",
      {
        params: {
          lat: "28.4885006",
          lng: "77.2961612",
          page_type: "DESKTOP_WEB_LISTING",
        },
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
          "Accept": "application/json",
          "Accept-Language": "en-US,en;q=0.9",
          "Referer": "https://www.swiggy.com/",
          "Origin": "https://www.swiggy.com",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(
      "Error fetching restaurant data:",
      error.response?.status,
      error.message
    );
    res.status(500).json({ error: "Failed to fetch restaurant data" });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});