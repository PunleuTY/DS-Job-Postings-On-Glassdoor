import express from "express";
import loggerMiddleware from "./src/middleware/logger.js";
import routeBuilder from "./src/routes/userRoute.js";
import middlewareValidation from "./src/middleware/validateMiddleware.js";

const app = express();
app.use(express.json());
app.use(loggerMiddleware);
routeBuilder(app, middlewareValidation);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
