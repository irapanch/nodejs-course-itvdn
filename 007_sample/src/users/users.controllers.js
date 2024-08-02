import * as userService from "./users.service.js";

export const findAll = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    return res.json(users);
  } catch (error) {
    return res.status(500).send(error);
  }
};
export const findById = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await userService.getUserById(userId);
    return res.json(user);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const create = async (req, res) => {
  const userBody = req.body;
  try {
    const user = await userService.create(userBody);
    return res.json(user);
  } catch (error) {
    return res.status(500).send(error);
  }
};
export const update = async (req, res) => {
  const userId = req.params.id;
  const userBody = req.body;

  try {
    const user = await userService.update(userId, userBody);
    return res.json(user);
  } catch (error) {
    return res.status(500).send(error);
  }
};
export const remove = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await userService.remove(userId);
    return res.json(user);
  } catch (error) {
    return res.status(500).send(error);
  }
};
