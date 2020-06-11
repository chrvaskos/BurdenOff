const request = require("request");
const bodyParser = require("body-parser");
const express = require("express");
const apiRouter = require("./routes");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());

app.use("/api", apiRouter);








app.listen(process.env.PORT || "5000", () => {
  console.log(`Geia soy ${process.env.PORT || "5000"}`);
});
