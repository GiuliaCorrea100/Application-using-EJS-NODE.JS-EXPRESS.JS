import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

//we need to use the body parser in order to user the POST prequest 
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const numLetters = req.body["fName"].length + req.body["lName"].length;
  res.render("index.ejs", {numberOfLetters: numLetters});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
