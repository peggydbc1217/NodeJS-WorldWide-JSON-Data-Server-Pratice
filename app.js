const express = require("express");
const app = express();
const worldwideRouter = require("./worldwideRouter");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/", worldwideRouter);

//如果上面的router都沒有match到，就會進到這個middleware handle錯誤
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`App running `);
});
