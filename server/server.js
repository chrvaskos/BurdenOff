const express = require("express");
const apiRouter = require("./routes");

const app = express();

app.use(express.json());

app.use("/api/posts", apiRouter);

app.listen(process.env.PORT || "5000", () => {
  console.log(`Geia soy ${process.env.PORT || "5000"}`);
});
