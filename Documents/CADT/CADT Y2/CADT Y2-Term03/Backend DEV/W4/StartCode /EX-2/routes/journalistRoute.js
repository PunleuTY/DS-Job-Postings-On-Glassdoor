import {
  createNewJournalist,
  deleteJournalist,
  getAllJournalist,
  getJournalistByID,
  updateJournalist,
} from "../controllers/journalistController.js";

const journalistRouteBuilder = (app) => {
  app.get("/journalists", getAllJournalist);
  app.get("/journalists/:id", getJournalistByID);
  app.post("/journalists", createNewJournalist);
  app.put("/journalists/:id", updateJournalist);
  app.delete("/journalists/:id", deleteJournalist);
};
export default journalistRouteBuilder;
