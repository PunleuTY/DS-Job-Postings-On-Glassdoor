const loggerMiddleware = (req, res, next) => {
  const isoTimeStamp = new Date().toISOString();
  console.log(`${req.method} ${req.url} - ${isoTimeStamp}`);
  next();
};
export default loggerMiddleware;
