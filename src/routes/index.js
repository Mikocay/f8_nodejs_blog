const siteRouter = require('./site');
const courseRouter = require('./courses');
const meRouter = require('./me');

const route = (app) => {
  app.use('/', siteRouter);

  app.use('/courses', courseRouter);

  app.use('/me', meRouter);
};

module.exports = route;
