const express = require("express");

const PORT = 3000;
const app = express();

app.set("view engine", "ejs");

app.use("/media", express.static("public"));
app.use((req, res, next) => {
  console.log(req.method);
  next();
});
// app.use("/", (req, res, next) => {});
// app.get("/", (req, res) => {
//   res.send("Hello world!");
// });
app.get("/", (req, res) => {
  res.render("pages/index", {
    courseName: "Node.js",
    lessonName: "Express.js",
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
