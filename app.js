import express from "express";
import router from "./routes/router.js";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

// Centralized error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Listening on port ${PORT}!`);
});