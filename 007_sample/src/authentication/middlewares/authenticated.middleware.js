import { WEB_TOKEN_SECRET_KEY } from "../../../config.js";
import { NotAuthenticatedError } from "../../errors/models/not-authenticated-err.js";
import jsonwebtoken from "jsonwebtoken";
export const authenticated = (req, res, next) => {
  try {
    const { token } = req.body;
    jsonwebtoken.verify(token, WEB_TOKEN_SECRET_KEY);
    return next();
  } catch (error) {
    next(new NotAuthenticatedError());
  }
};
