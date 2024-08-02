import express from "express";
import * as usersController from "./src/users/users.controllers.js";
import * as authenticationController from "./src/authentication/authentication.controller.js";

import { errorLogger } from "./src/errors/middlewares/err-logger.middleware.js";
import { standartErrResponser } from "./src/errors/middlewares/standart-err-responser.middleware.js";
import { hasRole } from "./src/authentication/authorization/middlewares/has-role.middleware.js";
import { authenticated } from "./src/authentication/middlewares/authenticated.middleware.js";
import { addCurrentUserIdToParams } from "./src/authentication/middlewares/add-current-user-id.middleware.js";

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

app.post("/signin", authenticationController.signIn);
app.post("/signup", authenticationController.signUp);

app.get(
  "/users/me",
  authenticated,
  hasRole("limited_user"),
  addCurrentUserIdToParams,
  usersController.findById
);
app.get("/users", authenticated, hasRole("admin"), usersController.findAll);
app.get(
  "/users/:id",
  authenticated,
  hasRole("admin"),
  usersController.findById
);
app.post("/users", authenticated, hasRole("admin"), usersController.create);
app.put("/users/:id", authenticated, hasRole("admin"), usersController.update);
app.delete(
  "/users/:id",
  authenticated,
  hasRole("admin"),
  usersController.remove
);

app.use(errorLogger);
app.use(standartErrResponser);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
