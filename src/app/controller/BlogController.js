const BlogNews = require('../model/BlogNews')
const { mongooseToObject } = require('../../util/mongo')
class BlogController {
    // [GET] /blog/:slug
    show(req, res, next) {
        
        BlogNews.findOne({ slug: req.params.slug})
            .then(blogNews => 
                res.render('blog/show', { blogNews: mongooseToObject(blogNews) })
            )
            .catch(next);
    }   
}

module.exports = new BlogController();
