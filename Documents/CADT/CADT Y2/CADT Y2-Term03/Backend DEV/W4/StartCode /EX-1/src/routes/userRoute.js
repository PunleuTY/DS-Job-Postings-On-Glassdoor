import {
  getAllUsers,
  getUserByID,
  createNewUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import middlewareValidation from "../middleware/validateMiddleware.js";

const routeBuilder = (app) => {
  app.get("/users/", getAllUsers);
  app.get("/users/:id", getUserByID);
  app.post("/users/", middlewareValidation, createNewUser);
  app.put("/users/:id", middlewareValidation, updateUser);
  app.delete("/users/:id", deleteUser);
};

export default routeBuilder;
