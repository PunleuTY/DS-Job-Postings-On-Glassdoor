import usersModel from "../models/userModel.js";

// Read all users in list
const getAllUsers = (req, res) => {
  res.json(usersModel);
};

// Read users through ID
const getUserByID = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = usersModel.find((u) => u.id === userId);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
};

// Create New User
const createNewUser = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  const newUser = {
    id: usersModel.length + 1,
    name,
    email,
  };
  usersModel.push(newUser);
  res.status(201).json(newUser);
};

// Update User by ID
const updateUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email } = req.body;

  const user = usersModel.find((u) => u.id === userId);
  if (!user) return res.status(404).json({ error: "User not found" });

  if (name) user.name = name;
  if (email) user.email = email;

  res.json(user);
};

// Delete User
const deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const index = usersModel.findIndex((u) => u.id === userId);
  if (index === -1) return res.status(404).json({ error: "User not found" });

  usersModel.splice(index, 1);
  res.status(204).send();
};

export { getAllUsers, getUserByID, createNewUser, updateUser, deleteUser };
