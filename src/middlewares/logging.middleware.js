let ctr = 0;

module.exports = app => {
  var logger = (req, res, next) => {
    console.log('ctr = ', ctr++);
    next();
  };
  
  app.use(logger);
};