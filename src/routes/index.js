const newsRouter = require('./news');
const siteRouter = require('./site');
const blogRouter = require('./blog');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/blog', blogRouter);

    app.use('/', siteRouter);

}

module.exports = route;
