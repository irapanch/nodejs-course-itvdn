import express from "express";
import {
  create,
  findAll,
  findById,
  remove,
  update,
} from "./src/users/users.controllers.js";

const PORT = 3000;
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
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
app.get("/users", findAll);
app.get("/users/:id", findById);
app.post("/users", create);
app.put("/users/:id", update);
app.delete("/users/:id", remove);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
