const BlogNews = require('../model/BlogNews')
const { mutipleMongooseToObject } = require('../../util/mongo')
class MeController {
    // [GET] me/stored/vlog
    storedVlog(req, res, next) {
        BlogNews.find({})
            .then(blogNews => res.render('me/stored-vlog', {
                blogNews: mutipleMongooseToObject(blogNews)
            }))
            .catch(next)
    }
}

module.exports = new MeController();
