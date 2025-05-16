// server.js
import express from "express";
import courses from "./course.js";
import loggerMiddleware from "../EX-3/routes/logger.js";
import validateQueryParam from "../EX-3/routes/validateQuery.js";
import authMiddleware from "../EX-3/routes/auth.js";

const app = express();
const PORT = 3000;

app.use(loggerMiddleware);
app.use(validateQueryParam);
app.use(authMiddleware);

// Route: GET /departments/:dept/courses
app.get("/departments/:dept/courses", (req, res) => {
  const { dept } = req.params;
  const { level, minCredits, maxCredits, semester, instructor } = req.query;
  app.use(loggerMiddleware);

  // Implementing the filter logic
  // Hint: Use the filter method to filter the courses array based on the provided criteria
  let filteredCourse = courses.filter((course) => course.department === dept);
  if (level) {
    filteredCourse = filteredCourse.filter(
      (course) => course.level.toLowerCase() === level.toLowerCase()
    );
  }
  if (minCredits && maxCredits && parseInt(minCredits) > parseInt(maxCredits)) {
    return res.status(400).send("Invalid Credits Range ");
  }
  if (minCredits) {
    filteredCourse = filteredCourse.filter(
      (course) => course.credits >= parseInt(minCredits)
    );
  }
  if (maxCredits) {
    filteredCourse = filteredCourse.filter(
      (course) => course.credits <= parseInt(maxCredits)
    );
  }
  if (instructor) {
    filteredCourse = filteredCourse.filter(
      (course) => course.instructor.toLowerCase() === instructor.toLowerCase()
    );
  }
  if (semester) {
    filteredCourse = filteredCourse.filter(
      (course) => course.semester.toLowerCase() === semester.toLowerCase()
    );
  }

  res.json(filteredCourse);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
