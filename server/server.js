const bodyParser = require("body-parser");
const express = require("express");
const apiRouter = require("./routes");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());

app.use("/api", apiRouter);

app.listen(process.env.PORT || "5000", () => {
  console.log(`Server started on port : ${process.env.PORT || "5000"}`);
});
