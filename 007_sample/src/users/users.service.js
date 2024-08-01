import * as usersRepository from "./users.repository.js";

export const getAllUsers = () => {
  return usersRepository.findAll();
};

export const getUserById = (userId) => {
  return usersRepository.findById(userId);
};
export const create = (user) => {
  const possibleUser = usersRepository.findByLogin(user.login);
  if (possibleUser) {
    throw new Error("Specified login is already in use");
  }
  return usersRepository.create(user);
};
export const update = async (userId, userData) => {
  const user = await usersRepository.findById(userId);
  return usersRepository.update(user.id, userData);
};
export const remove = (userId) => {
  return usersRepository.remove(userId);
};
