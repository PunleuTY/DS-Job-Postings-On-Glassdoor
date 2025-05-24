import journalists from "../models/journalistModel.js";

const getAllJournalist = (req, res) => {
  res.json(journalists);
};

const getJournalistByID = (req, res) => {
  const journalist = journalists.find((j) => j.id === parseInt(req.params.id));
  if (!journalist)
    return res.status(404).json({ error: "Journalist not found" });
  res.json(journalist);
};

const createNewJournalist = (req, res) => {
  const { name, email } = req.body;
  const newJournalist = {
    id: journalists.length + 1,
    name,
    email,
  };
  journalists.push(newJournalist);
  res.status(201).json(newJournalist);
};

const updateJournalist = (req, res) => {
  const { name, email } = req.body;
  const journalist = journalists.find((j) => j.id === parseInt(req.params.id));
  if (!journalist)
    return res.status(404).json({ error: "Journalist Not Found!" });
  journalist.name = name ?? journalist.name;
  journalist.email = email ?? journalist.email;
  res.json(journalist);
};

const deleteJournalist = (req, res) => {
  const index = journalists.findIndex((j) => j.id === parseInt(req.params.id));
  if (index === -1)
    return res.status(404).json({ error: "Journalist Not Found" });
  journalists.splice(index, 1);
  res.status(201).send();
};

export {
  getAllJournalist,
  getJournalistByID,
  createNewJournalist,
  deleteJournalist,
  updateJournalist,
};
