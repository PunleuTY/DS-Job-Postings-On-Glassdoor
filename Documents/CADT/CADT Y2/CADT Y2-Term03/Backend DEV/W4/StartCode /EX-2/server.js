import express from "express";

import logger from "./middleware/logger.js";
import articleRouteBuilder from "./routes/articleRoute.js";
import journalistRouteBuilder from "./routes/journalistRoute.js";
import categoryRouteBuilder from "./routes/categoryRoute.js";
const app = express();
app.use(express.json());
const PORT = 3000;
app.use(logger);
articleRouteBuilder(app);
journalistRouteBuilder(app);
categoryRouteBuilder(app);

// app.get('/', (req, res) => {
//     res.json(articles)
// });

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
