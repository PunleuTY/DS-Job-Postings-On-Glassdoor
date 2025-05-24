import articles from "../models/articleModel.js";

// Read all articles
const getAllArticle = (req, res) => {
  res.json(articles);
};

// Read article by ID
const getArticleByID = (req, res) => {
  const article = articles.find((a) => a.id === parseInt(req.params.id));
  if (!article) return res.status(404).json({ error: "Article not found" });
  res.json(article);
};

// Create new article
const createNewArticle = (req, res) => {
  const { title, content, journalistId, categoryId } = req.body;
  const newArticle = {
    id: articles.length + 1,
    title,
    content,
    journalistId,
    categoryId,
  };
  articles.push(newArticle);
  res.status(201).json(newArticle);
};

// Update article
const updateArticle = (req, res) => {
  const { title, content, journalistId, categoryId } = req.body;
  const article = articles.find((a) => a.id === parseInt(req.params.id));
  if (!article) return res.status(404).json({ error: "Article Not Found!" });
  article.title = title ?? article.title;
  article.content = content ?? article.content;
  article.journalistId = journalistId ?? article.journalistId;
  article.categoryId = categoryId ?? article.categoryId;
  res.json(article);
};

// Delete article
const deleteArticle = (req, res) => {
  const index = articles.findIndex((a) => a.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Article Not Found" });
  articles.splice(index, 1);
  res.status(201).send();
};

export {
  getAllArticle,
  getArticleByID,
  createNewArticle,
  deleteArticle,
  updateArticle,
};
