const BlogNews = require('../model/BlogNews')
const { mutipleMongooseToObject } = require('../../util/mongo')
class SiteController {
    // [GET] /
    index(req, res, next) {
        
        // BlogNews.find({}, function (err, blogNews){
        //     if(!err) {
        //         res.json(blogNews);
        //     } else {
        //         next(err)
        //     }
        // })

        BlogNews.find({})
            .then(blogNews => {
                res.render('home', {
                    blogNews: mutipleMongooseToObject(blogNews)
                })
            })
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
