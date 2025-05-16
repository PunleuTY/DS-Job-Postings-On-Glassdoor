const validateQueryParam = (req, res, next) => {
  const { minCredits, maxCredits } = req.query;
  if (
    (minCredits && isNaN(parseInt(minCredits))) ||
    (maxCredits && isNaN(parseInt(maxCredits)))
  ) {
    return res.json({
      error: "minCredits or maxCredits must be valid integer numbers",
    });
  }
  next();
};
export default validateQueryParam;
