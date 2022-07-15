const newsRouter = require('./news');
const meRouter = require('./me');
const siteRouter = require('./site');
const blogRouter = require('./blog');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/blog', blogRouter);

    app.use('/', siteRouter);

}

module.exports = route;
