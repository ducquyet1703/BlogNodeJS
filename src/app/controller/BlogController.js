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
    
    // [GET] /blog/create  --- Nhận dữ liệu
    create(req, res, next){
        res.render('blog/create');
    }

    // [POST] /blog/store ---- Lưu dữ liệu
    store(req, res, next){
        const formData = req.body
        const blogNews = new BlogNews(formData);
        blogNews.save()
            .then(() => res.redirect('/'))
            .catch(error => {

            });
    }

}

module.exports = new BlogController();
