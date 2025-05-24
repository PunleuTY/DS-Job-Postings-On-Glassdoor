import categories from "../models/categoryModel.js";

// Read all Categories
const getAllCategory = (req, res) => {
  res.json(categories);
};

// Read Category by ID
const getCategoryByID = (req, res) => {
  const category = categories.find((c) => c.id === parseInt(req.params.id));
  if (!category) return res.status(404).json({ error: "Category not found" });
  res.json(category);
};

// Create New Category
const createNewCategory = (req, res) => {
  const { name } = req.body;
  const newCategory = {
    id: categories.length + 1,
    name,
  };
  categories.push(newCategory);
  res.status(201).json(newCategory);
};

// Update Category
const updateCategory = (req, res) => {
  const { name } = req.body;
  const category = categories.find((c) => c.id === parseInt(req.params.id));
  if (!category) return res.status(404).json({ error: "Category Not Found!" });
  category.name = name ?? category.name;
  res.json(category);
};

// Delete Category
const deleteCategory = (req, res) => {
  const index = categories.findIndex((c) => c.id === parseInt(req.params.id));
  if (index === -1)
    return res.status(404).json({ error: "Category Not Found" });
  categories.splice(index, 1);
  res.status(201).send();
};
export {
  getAllCategory,
  getCategoryByID,
  createNewCategory,
  updateCategory,
  deleteCategory,
};
