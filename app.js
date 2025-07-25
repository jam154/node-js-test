const express = require("express");
const app = express();

const port = process.env.PORT || 8080;
const welcomeMessage = process.env.WELCOME_MSG || "Welcome default message";

app.get("/", (req, res) => {
  res.send(`<h1>${welcomeMessage}</h1>`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
