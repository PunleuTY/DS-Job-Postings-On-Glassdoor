import {
  createNewArticle,
  deleteArticle,
  getAllArticle,
  getArticleByID,
  updateArticle,
} from "../controllers/articleController.js";

const articleRouteBuilder = (app) => {
  app.get("/articles", getAllArticle);
  app.get("/articles/:id", getArticleByID);
  app.post("/articles", createNewArticle);
  app.put("/articles/:id", updateArticle);
  app.delete("/articles/:id", deleteArticle);
};
export default articleRouteBuilder;
