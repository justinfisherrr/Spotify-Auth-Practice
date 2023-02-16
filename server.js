const express = require("express");
const app = express(); //Creates an express instance.
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/success", (req, res) => {
  res.render("demo");
});

app.post("/login", (req, res) => {
  res.redirect("/login");
});

const userRouter = require("./routes/auth").router;
const spotifyRouter = require("./routes/spotifyRequests").router;
app.use("/", userRouter).use("/", spotifyRouter);
//Port - Enviornment Variable
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on ${port} `));
