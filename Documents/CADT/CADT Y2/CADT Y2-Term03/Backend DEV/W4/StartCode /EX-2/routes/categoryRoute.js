import {
  createNewCategory,
  deleteCategory,
  getAllCategory,
  getCategoryByID,
  updateCategory,
} from "../controllers/categoryController.js";

const categoryRouteBuilder = (app) => {
  app.get("/categories", getAllCategory);
  app.get("/categories/:id", getCategoryByID);
  app.post("/categories", createNewCategory);
  app.put("/categories/:id", updateCategory);
  app.delete("/categories/:id", deleteCategory);
};
export default categoryRouteBuilder;
