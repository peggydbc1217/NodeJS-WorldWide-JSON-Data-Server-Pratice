const express = require("express");
const fs = require("fs");

const data = JSON.parse(fs.readFileSync(`${__dirname}/cities.json`, "utf-8"));

const router = express.Router();

router.get("/cities", (req, res) => {
  res.status(200).json({
    status: "success",
    results: data.length,
    data: data.cities,
  });
});

router.get("/cities/:id", (req, res) => {
  const city = data.cities.find((city) => city.id === req.params.id);

  res.status(200).json({
    status: "success",
    results: data.cities.length,
    data: city,
  });
});

router.post("/cities", (req, res) => {
  console.log("data--", data);
  data.cities.push(req.body);

  res.status(200).json({
    status: "success",
    results: data.cities.length,
    data: data.cities,
  });
});

router.delete("/cities/:id", (req, res) => {
  data.cities.filter((city) => city.id !== req.params.id);
  res.status(204).json({
    status: "success",
    data: null,
  });
});
module.exports = router;
