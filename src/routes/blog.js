const express = require('express');
const router = express.Router();

const blogController = require('../app/controller/BlogController');

router.get('/:slug', blogController.show);
router.get('/create', blogController.create);

module.exports = router;
