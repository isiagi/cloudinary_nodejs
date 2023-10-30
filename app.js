const express = require("express");
const dbConnect = require("./db/database");
const route = require("./routers/routers");

dbConnect();

const app = express();

app.use(express.json());
app.use("/api/", route);

const port = process.env.PORT || 8080;

app.listen(port, async () => {
  console.log(`Server up and running http://localhost:${port}`);
});
